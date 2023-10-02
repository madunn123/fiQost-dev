import React from 'react';
import { AiOutlineCalendar, AiOutlineArrowDown, AiOutlineWifi } from 'react-icons/ai';
import Constant from '@/utils/constant';

export default function Cards({ kwh }) {
  const datenow = new Date();
  const { days, month } = Constant();

  return (
    <div className="relative w-full p-4 text-white rounded-lg xl:h-[180px] bg-main-color">
      <div className="flex flex-col gap-2 xl:mt-4">
        <h1 className="m-0 font-bold capitalize text-xl text-slate-50">Penggunaan Wifi Kamu</h1>
        <span className="capitalize flex flex-row gap-2 items-center">
          <AiOutlineCalendar />
          <div>
            {days[datenow.getDay()]}
            ,
            {' '}
            {datenow.getDate()}
            {' '}
            {month[datenow.getMonth()]}
            {' '}
            {datenow.getFullYear()}
          </div>
        </span>
        <span className="capitalize flex flex-row gap-2 items-center">
          <AiOutlineWifi />
          Indihome
        </span>
      </div>

      <div className="flex flex-row items-center gap-4 xl:mt-4">
        <h1 className="m-0 text-slate-50 font-bold text-xl">{kwh}</h1>
        <div className=" text-green-700 text-xs rounded-full p-1 px-3 bg-green-50 flex flex-row gap-1 items-center">
          <AiOutlineArrowDown />
          4.2%
        </div>
      </div>

    </div>
  );
}
