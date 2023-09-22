import React from 'react';
import { Link } from 'react-router-dom';
import Constant from '@/utils/constant';

export default function RightBar() {
  const { routersPage } = Constant();

  return (
    <aside className="py-10 bg-white shadow-lg xl:h-screen xl:w-[200px] text-center">
      <ul>
        {
          routersPage?.map((route) => (
            <li key={route?.path}>
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
