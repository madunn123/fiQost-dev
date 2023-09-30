import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import useRegister from '@/hooks/useRegister';
import bg from '../../public/img/bg-auth.png';
import Logo from '../../public/img/logo.svg';

export default function Register() {
  const {
    onSubmit, register, randomMath, visible, setVisible, state,
  } = useRegister();

  return (
    <section className="flex items-center justify-center overflow-hidden xl:h-full xl:w-full">
      <div className="flex flex-col gap-4">
        {state?.error && <span className="pl-4 text-red-600 border-l-4 border-red-600 py-2.5 capitalize bg-red-50">{state?.error}</span>}
        <div className="bg-slate-50 shadow-lg text-font-colors xl:w-[700px] px-10 py-5 rounded-lg">
          <div className="flex flex-col gap-8 text-center xl:mt-5">
            <div className="flex justify-center px-12 py-10 ">
              <img src={Logo} alt="FiQost Living" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 ">
                <h1 className="m-0 text-3xl font-bold">Buat Akun Baru</h1>
                <Link to="/">
                  Kamu Sudah Memiliki Akun?
                  {' '}
                  <b className="font-semibold text-main-color">Masuk Disini</b>
                </Link>
              </div>

              <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="nomorkamar">Nomor Kamar</label>
                  <input
                    type="number"
                    id="nomorkamar"
                    className="p-3 text-sm font-medium duration-300 border rounded-md outline-none bg-slate-200 placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                    disabled
                    placeholder="room number"
                    value={randomMath}
                    {...register('roomNumber')}
                  />

                  <label htmlFor="username">Username</label>
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
                      id="password"
                      type={visible ? 'text' : 'password'}
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

                  <label htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
                  <div className="relative">
                    <input
                      id="confirm-password"
                      type={visible ? 'text' : 'password'}
                      className="w-full p-3 text-sm font-medium duration-300 border rounded-md outline-none placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                      placeholder="confirm password"
                      {...register('confirmPassword')}
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
                    {state?.loading ? '...Loading' : 'Daftar'}
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
      <div className="xl:max-h-screen">
        <img src={bg} alt="" />
      </div>
    </section>
  );
}
