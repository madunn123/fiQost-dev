import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineArrowUp } from 'react-icons/ai';
import Constant from '@/utils/constant';

export default function Cards({ kwh }) {
  const datenow = new Date();
  const { days, month } = Constant();

  return (
    <div className="relative w-full p-4 text-white rounded-lg xl:h-[180px] bg-main-color">
      <div className="flex flex-col gap-2 xl:mt-3">
        <h1 className="m-0 text-xl font-bold capitalize inter-font">penggunaan listrik kamu</h1>
        <span className="flex flex-row items-center gap-2 capitalize">
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
      </div>

      <div className="flex flex-row items-center gap-4 xl:mt-5 popins-font">
        <h1 className="m-0 text-xl font-bold text-slate-50">{kwh}</h1>
        <div className="text-[#B45309] text-xs rounded-full p-1 px-3 bg-[#FFFBEB] flex flex-row gap-1 items-center">
          <AiOutlineArrowUp />
          7.2%
        </div>
      </div>

      <Link to="/view-detail" className="absolute text-sm font-semibold bottom-4 right-5 inter-font">Lihat Selengkapnya</Link>
    </div>
  );
}
