import React from 'react';
import { BsBell } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { getFromLocalStorage } from '@/utils/helper';

export default function Navbar({ names }) {
  const location = useLocation();
  const userWithRoomNumber = getFromLocalStorage('user');

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between w-full h-40 px-6 py-8 bg-white border-b border-slate-300">
      <div className="flex flex-col gap-2 ">
        <h1 className="m-0 text-2xl font-bold text-black">{names}</h1>
        {
          location.pathname === '/dashboard'
        && (
        <h2 className="m-0 text-xl font-semibold text-slate-500">
          Halo
          {' '}
          {userWithRoomNumber?.username}
          , Selamat datang !
          {' '}
        </h2>
        )
      }
      </div>

      <div className="flex justify-center gap-3">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pencarian" required />

          </div>
        </form>

        <div className="p-3 bg-blue-100 rounded-full">
          <BsBell />
        </div>

        <div>
          <img src="/images/ava.png" alt="Avatar" className="rounded-full" />
        </div>
      </div>
    </nav>
  );
}
