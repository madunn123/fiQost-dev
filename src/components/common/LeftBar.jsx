import React from 'react';
import { Link } from 'react-router-dom';
import Constant from '@/utils/constant';
import Logo from '../../../public/img/logo.svg';

export default function LeftBar() {
  const { routersPage } = Constant();

  return (
    <aside className="py-10 bg-white shadow-lg xl:h-screen xl:w-[350px] text-center px-4 flex flex-col gap-2">
      <div className="pt-8 mx-5">
        <img src={Logo} alt="Icon Logo" className="pb-4" />
      </div>
      <ul className="mt-6">
        {
          routersPage?.map((route) => (
            <li key={route?.path} className="p-3">
              <Link to={route?.path} className="flex flex-row items-center gap-4">
                {route?.icons}
                {route?.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  );
}
