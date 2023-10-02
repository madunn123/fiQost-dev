import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Constant from '@/utils/constant';
import Progressbar from '../common/Progressbar';

export default function ComplaintReport() {
  const datenow = new Date();
  const { month, days } = Constant();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between xl:mb-2">
        <h1 className="m-0 font-bold">status laporan keluhan kamu</h1>
        <button type="button">
          <BsThreeDotsVertical />
        </button>
      </div>

      {
        Array.from({ length: 2 })?.map((_, i) => (
          <div className="flex flex-col gap-6 p-3 border-2 rounded-lg border-slate-200" key={i}>
            <div className="flex flex-col gap-2 5">
              <span className="text-sm">
                {days[datenow.getDay()]}
                ,
                {' '}
                {datenow.getDate()}
                {' '}
                {month[datenow.getMonth()]}
                {' '}
                {datenow.getFullYear()}
              </span>
              <span className="text-sm">genteng bocor</span>
            </div>

            <Progressbar val={i % 2 === 0 ? 50 : 20} />
          </div>
        ))
      }

      <div className="flex flex-row justify-end">
        <Link to="/view-detail" className="text-sm">lihat selengkapnya</Link>
      </div>
    </div>
  );
}
