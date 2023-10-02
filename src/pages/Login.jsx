import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useLogin from '@/hooks/useLogin';
import AuthenticationLayout from '@/components/layout/AuthenticationLayout';

export default function Login() {
  const {
    register, state, visible, setVisible, onSubmit,
  } = useLogin();

  return (
    <AuthenticationLayout title="selamat datang" link="/register" haveornohaveaccount="Kamu belum memiliki akun?" bodyLink="Daftar disini">
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="p-3 text-sm font-medium duration-300 text-main-color border rounded-md outline-none xl:w-[500px] bg-inherit placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
            placeholder="username"
            {...register('username')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm">Kata Sandi</label>
          <div className="relative">
            <input
              type={visible ? 'text' : 'password'}
              id="password"
              className="w-full p-3 text-sm font-medium duration-300 border rounded-md outline-none text-main-color bg-inherit placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
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

        {state?.error && <span className="pl-4 text-red-600 border-l-4 border-red-600 py-2.5 text-sm capitalize bg-red-50">{state?.error}</span>}

        <div className="flex flex-col gap-4">
          <button type="submit" className="p-3 text-sm font-semibold text-white uppercase duration-500 rounded-md bg-main-color hover:bg-thirdy-color hover:text-font-colors">
            {state?.loading ? <span className="w-5 h-5"><AiOutlineLoading3Quarters className="mx-auto animate-spin" /></span> : 'Masuk'}
          </button>

          <span className="text-sm text-center text-slate-600">
            Kamu lupa password?
            {' '}
            <Link to="/" className="font-bold text-main-color">Klik disini</Link>
          </span>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
