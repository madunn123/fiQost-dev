import React from 'react';
import { BsThreeDotsVertical, BsTools } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Constant from '@/utils/constant';
import Progressbar from '../common/Progressbar';

export default function ComplaintReport({ tab }) {
  const datenow = new Date();
  const { month, days } = Constant();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between xl:mb-2">
        <h1 className="m-0 text-xl font-bold text-black popins-font">Status Laporan Keluhan Kamu</h1>
        <button type="button">
          <BsThreeDotsVertical />
        </button>
      </div>

      {
        Array.from({ length: 2 })?.map((_, i) => (
          <div className="flex flex-col gap-6 p-3 border-2 rounded-lg border-slate-200" key={i}>
            <div className="flex flex-col gap-2 5">
              <span className="flex flex-row items-center gap-2 text-sm capitalize">
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
              <span className="flex flex-row gap-2 text-sm capitalize inter-font">
                <BsTools />
                genteng bocor
              </span>
            </div>

            {tab === 'harian' && <Progressbar val={i % 2 === 0 ? 80 : 20} />}
            {tab === 'mingguan' && <Progressbar val={i % 2 === 0 ? 20 : 50} />}
            {tab === 'bulanan' && <Progressbar val={i % 2 === 0 ? 70 : 30} />}
          </div>
        ))
      }

      <div className="flex flex-row justify-end">
        <Link to="/view-detail" className="text-sm">Lihat Selengkapnya</Link>
      </div>
    </div>
  );
}
