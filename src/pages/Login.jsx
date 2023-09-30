import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useLogin from '@/hooks/useLogin';
import bg from '../../public/img/bg-auth.png';
import Logo from '../../public/img/logo.svg';

export default function Login() {
  const {
    register, state, visible, setVisible, onSubmit,
  } = useLogin();

  return (
    <section className="flex justify-center overflow-hidden xl:h-full xl:w-full">
      <div className="flex flex-col gap-4 bg-slate-50 max-h-[800px]">
        {state?.error && <span className="pl-4 text-red-600 border-l-4 border-red-600 py-2.5 capitalize bg-red-50">{state?.error}</span>}
        <div className="text-font-colors xl:w-[700px] p-10 rounded-lg">
          <div className="flex flex-col text-center gap-y-20 xl:mt-5">
            <div className="flex justify-center px-12 py-10 ">
              <img src={Logo} alt="FiQost Living" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 text-center">
                <h1 className="m-0 text-3xl font-bold">Selamat Datang</h1>
                <Link to="/register">
                  Kamu Belum Memiliki Akun?
                  {' '}
                  <b className="font-semibold text-main-color">Daftar Disini</b>
                </Link>
              </div>

              <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <div className="flex flex-col gap-4">
                  <label htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="p-3 text-sm font-medium duration-300 border rounded-md outline-none placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                    placeholder="username"
                    {...register('username')}
                  />

                  <label htmlFor="password">Kata Sandi</label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="w-full p-3 text-sm font-medium duration-300 border rounded-md outline-none placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                      placeholder="password"
                      {...register('password')}
                    />
                    <button type="button" onClick={() => setVisible(!visible)} className="absolute right-4 top-3">
                      {
                        visible
                          ? <AiOutlineEyeInvisible className="xl:h-6 xl:w-6 text-slate-400" />
                          : <AiOutlineEye className="xl:h-6 xl:w-6 text-slate-400" />
                      }
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <button type="submit" className="p-3 text-base font-semibold text-white uppercase duration-500 rounded-md bg-main-color hover:bg-thirdy-color hover:text-font-colors">
                    {state?.loading ? '...loading' : 'Masuk'}
                  </button>
                </div>
              </form>
            </div>
            <div>
              <p>
                Dengan mendaftar, kamu telah setuju
                <br />
                dengan
                {' '}
                <b className="font-semibold text-main-color">Ketentuan & Kebijakan Pribadi</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-h-[800px]">
        <img src={bg} alt="Background Auth" />
      </div>
    </section>
  );
}
