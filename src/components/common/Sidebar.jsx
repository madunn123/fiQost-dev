import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Constant from '@/utils/constant';

export default function Sidebar() {
  const location = useLocation();
  const { routersPage } = Constant();
  const [openedDropdown, setOpenedDropdown] = useState(false);

  return (
    <aside className="sticky top-0 left-0 h-screen bg-white border-r-2 xl:max-w-full border-slate-200">
      <div className="relative h-full px-8 py-10 overflow-hidden">
        <div className="absolute left-0 flex justify-center w-full top-16">
          <img src="/src/assets/images/logo.svg" alt="logo" className="xl:w-56" />
        </div>

        <ul className="absolute left-0 flex flex-col w-full gap-6 px-8 top-36">
          {routersPage?.map((routers) => {
            if (routers?.name === 'Fasilitas') {
              return (
                <div className={`px-3 ${location.pathname === '/air' || location.pathname === '/listrik' || location.pathname === '/wifi' ? 'bg-red-600' : ''}`} key={routers.name}>
                  <button type="button" className="w-full" to={routers?.path} onClick={() => setOpenedDropdown(!openedDropdown)}>
                    <li className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row items-center gap-4">
                        {routers?.icons}
                        {routers?.name}
                      </div>
                      <MdOutlineKeyboardArrowDown />
                    </li>
                  </button>

                  {openedDropdown && (
                    <ul className="flex flex-col mt-2.5 gap-2.5 pl-8">
                      {routers?.subMenu?.map((submenu) => (
                        <Link to={submenu?.path} key={submenu?.name}>
                          <li>{submenu?.name}</li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }

            return (
              <Link
                to={routers?.path}
                key={routers.name}
                className={`px-3  ${location.pathname === routers.path && 'border-l-8 py-2 bg-thirdy-color text-main-color font-bold border-main-color rounded-lg'}`}
              >
                <li className="flex flex-row items-center gap-2.5">
                  {routers?.icons}
                  {routers?.name}
                </li>
              </Link>
            );
          }).slice(0, 4)}
        </ul>

        <ul className="absolute flex flex-col gap-6 bottom-10">
          {routersPage?.map((routers) => (
            <Link to={routers?.path} key={routers?.name}>
              <li className="px-3 flex flex-row items-center gap-2.5">
                {routers?.icons}
                {routers?.name}
              </li>
            </Link>
          )).slice(4, 7)}
        </ul>
      </div>
    </aside>
  );
}
