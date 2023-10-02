import React from 'react';
import { Link } from 'react-router-dom';
import Constant from '@/utils/constant';

export default function Cards({ kwh }) {
  const datenow = new Date();
  const { days, month } = Constant();

  return (
    <div className="relative w-full p-4 text-white rounded-lg xl:h-[180px] bg-main-color">
      <div className="flex flex-col gap-2 xl:mt-4">
        <h1 className="m-0 font-bold capitalize">penggunaan listrik kamu</h1>
        <span className="capitalize">
          {days[datenow.getDay()]}
          ,
          {' '}
          {datenow.getDate()}
          {' '}
          {month[datenow.getMonth()]}
          {' '}
          {datenow.getFullYear()}
        </span>
      </div>

      <div className="flex flex-row items-center gap-4 xl:mt-4">
        <h1 className="m-0">{kwh}</h1>
        <div className="text-[#B45309] text-xs rounded-full p-1 px-5 bg-[#FFFBEB]">7.2%</div>
      </div>

      <Link to="/view-detail" className="absolute bottom-2.5 right-5">lihat selengkapnya</Link>
    </div>
  );
}
