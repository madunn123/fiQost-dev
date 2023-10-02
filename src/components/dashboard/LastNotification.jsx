import React from 'react';
import { BsThreeDotsVertical, BsTools } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Constant from '@/utils/constant';

export default function LastNotification() {
  const datenow = new Date();
  const { month, days } = Constant();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between xl:mb-2">
        <h1 className="m-0 font-bold text-black text-xl">Notification Terakhir</h1>
        <button type="button">
          <BsThreeDotsVertical />
        </button>
      </div>

      {
        Array.from({ length: 2 })?.map((_, i) => (
          <div className="flex flex-col gap-6 p-3 border-2 rounded-lg border-slate-200" key={i}>
            <div className="flex flex-col gap-2 5">
              <span className="text-sm flex flex-row gap-2 items-center capitalize">
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
              <span className="text-sm flex flex-row gap-2 items-center capitalize">
                <BsTools />
                genteng bocor
              </span>
            </div>
            <p className="m-0 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ea!</p>
          </div>
        ))
      }

      <div className="flex flex-row justify-end">
        <Link to="/view-detail" className="text-sm">Lihat Selengkapnya</Link>
      </div>
    </div>
  );
}
