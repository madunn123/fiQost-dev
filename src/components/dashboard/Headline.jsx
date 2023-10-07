import React from 'react';
import Constant from '@/utils/constant';
import { getFromLocalStorage } from '@/utils/helper';

export default function Headline() {
  const datenow = new Date();
  const { month } = Constant();
  const userWithRoomNumber = getFromLocalStorage('user');

  return (
    <div className="flex flex-row items-center justify-between p-6 py-12 rounded-md bg-thirdy-color">
      <div className="flex flex-col gap-4">
        <h1 className="m-0 text-5xl font-bold capitalize text-main-color popins-font">
          kamar
          {' '}
          {userWithRoomNumber?.roomNumber}
        </h1>
        <span className="text-base font-semibold text-main-color inter-font">
          Tagihan kamar kamu akan jatuh tempo pada tanggal
          {' '}
          {datenow.getDate()}
          {' '}
          {month[datenow.getMonth()]}
          {' '}
          {datenow.getFullYear()}
        </span>
      </div>

      <div className="wrapper">
        <button type="button" className="p-3 px-5 text-base font-semibold text-white capitalize rounded-full popins-font bg-main-color">laporkan keluhan</button>
      </div>
    </div>
  );
}
