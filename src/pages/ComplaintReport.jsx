import React, { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { getFromLocalStorage } from '@/utils/helper';
import useFilter from '@/hooks/useFilter';
import Constant from '@/utils/constant';
import Progressbar from '@/components/common/Progressbar';
import ComplaintReportModal from '@/components/common/modal/ComplaintReportModal';

export default function ComplaintReport() {
  const userWithRoomNumber = getFromLocalStorage('user');
  const { tab, handleFilter } = useFilter();

  const datenow = new Date();
  const { month, days } = Constant();

  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between p-6 py-10 rounded-md bg-thirdy-color popins-font">
        <h1 className="m-0 text-4xl font-semibold text-main-color">
          Kamar
          {' '}
          {userWithRoomNumber?.roomNumber}
        </h1>

        <button
          type="button"
          className="capitalize rounded-full p-2.5 px-4 bg-main-color text-white font-semibold"
          onClick={() => setOpenModal(!openModal)}
        >
          laporkan keluhan
        </button>
      </div>

      <div className="flex flex-row items-center gap-0 text-sm inter-font">
        <button
          type="button"
          className={`capitalize border-2 border-r-0 p-3 px-6 rounded-tl-lg rounded-bl-lg ${tab === 'diterima' || tab === 'harian' ? ' bg-main-color text-white' : ''}`}
          onClick={() => handleFilter('diterima')}
        >
          Diterima
        </button>
        <button
          type="button"
          className={`p-3 px-6 capitalize border-2 border-r-0 border-slate-200 ${tab === 'diproses' && 'bg-main-color text-white'}`}
          onClick={() => handleFilter('diproses')}
        >
          Diproses
        </button>
        <button
          type="button"
          className={`p-3 px-6 capitalize border-2 rounded-tr-lg rounded-br-lg border-slate-200 ${tab === 'selesai' && 'bg-main-color text-white'}`}
          onClick={() => handleFilter('selesai')}
        >
          Selesai
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {
        Array.from({ length: 10 })?.map((_, i) => (
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

            {tab === 'diterima' || tab === 'harian' ? <Progressbar val={i % 2 === 0 ? 80 : 20} /> : ''}
            {tab === 'diproses' && <Progressbar val={i % 2 === 0 ? 20 : 50} />}
            {tab === 'selesai' && <Progressbar val={i % 2 === 0 ? 70 : 30} />}
          </div>
        ))
      }
      </div>

      {openModal && <ComplaintReportModal />}
    </section>
  );
}
