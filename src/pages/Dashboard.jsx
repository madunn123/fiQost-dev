import React from 'react';
import { BsFilter } from 'react-icons/bs';
import Constant from '@/utils/constant';
import Cards from '@/components/dashboard/Cards';
import ComplaintReport from '@/components/dashboard/ComplaintReport';
import LastNotification from '@/components/dashboard/LastNotification';

export default function Dashboard() {
  const datenow = new Date();
  const { month } = Constant();

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 p-6 rounded-md bg-thirdy-color">
        <h1 className="m-0 text-5xl font-bold capitalize text-main-color">kamar 9</h1>
        <span className="text-base font-semibold text-main-color">
          Tagihan kamar kamu akan jatuh tempo pada tanggal
          {' '}
          {datenow.getDate()}
          {' '}
          {month[datenow.getMonth()]}
          {' '}
          {datenow.getFullYear()}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center gap-0 text-sm">
          <button type="button" className="p-3 capitalize border-2 border-r-0 rounded-tl-lg rounded-bl-lg border-slate-200">harian</button>
          <button type="button" className="p-3 capitalize border-2 border-r-0 border-slate-200">mingguan</button>
          <button type="button" className="p-3 capitalize border-2 rounded-tr-lg rounded-br-lg border-slate-200">bulanan</button>
        </div>

        <input type="date" className="p-3 ml-2 text-sm rounded-lg bg-thirdy-color" />
        <button type="button" className="flex flex-row items-center gap-2 p-3 text-sm rounded-lg bg-thirdy-color">
          Filter
          {' '}
          <BsFilter />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="m-0 text-xl font-bold capitalize">ringkasan</h1>
        <div className="flex flex-row gap-6">
          {Array.from({ length: 3 })?.map((_, idx) => {
            const kwh = ['4 kwh', '18 m3', '14gb'];
            return (
              <Cards kwh={kwh[idx]} key={kwh[idx]} />
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-4">
          <ComplaintReport />
        </div>
        <div className="col-span-2">
          <LastNotification />
        </div>
      </div>
    </section>
  );
}
