import React from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineLoading3Quarters } from 'react-icons/ai';
import useRegister from '@/hooks/useRegister';
import AuthenticationLayout from '@/components/layout/AuthenticationLayout';

export default function Register() {
  const {
    onSubmit, register, randomMath, visible, setVisible, state,
  } = useRegister();

  return (
    <AuthenticationLayout title="buat akun baru" link="/" haveornohaveaccount="Kamu sudah memiliki akun?" bodyLink="Masuk disini">
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nomorkamar" className="text-sm">Nomor Kamar</label>
          <input
            type="number"
            id="nomorkamar"
            className="p-3 text-sm font-medium xl:w-[500px] duration-300 border rounded-md outline-none bg-slate-200 placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
            disabled
            placeholder="room number"
            value={randomMath}
            {...register('roomNumber')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm">Username</label>
          <input
            type="text"
            id="username"
            className="p-3 text-sm font-medium duration-300 bg-transparent border rounded-md outline-none text-main-color placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
            placeholder="username"
            {...register('username')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm">Kata Sandi</label>
          <div className="relative">
            <input
              id="password"
              type={visible ? 'text' : 'password'}
              className="w-full p-3 text-sm font-medium duration-300 bg-transparent border rounded-md outline-none text-main-color placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
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

        <div className="flex flex-col gap-2">
          <label htmlFor="confirm-password" className="text-sm">Konfirmasi Kata Sandi</label>
          <div className="relative">
            <input
              id="confirm-password"
              type={visible ? 'text' : 'password'}
              className="w-full p-3 text-sm font-medium duration-300 bg-transparent border rounded-md outline-none text-main-color placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
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
          <button type="submit" className="p-3 text-sm font-semibold text-white uppercase duration-500 rounded-md bg-main-color hover:bg-thirdy-color hover:text-font-colors">
            {state?.loading ? <span className="w-5 h-5"><AiOutlineLoading3Quarters className="mx-auto animate-spin" /></span> : 'Daftar'}
          </button>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
