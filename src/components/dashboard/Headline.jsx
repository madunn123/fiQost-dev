import React from 'react';
import Constant from '@/utils/constant';
import { getFromLocalStorage } from '@/utils/helper';

export default function Headline() {
  const datenow = new Date();
  const { month } = Constant();
  const userWithRoomNumber = getFromLocalStorage('user');

  return (
    <div className="flex flex-col gap-4 p-6 rounded-md bg-thirdy-color">
      <h1 className="m-0 text-5xl font-bold capitalize text-main-color">
        kamar
        {' '}
        {userWithRoomNumber?.roomNumber}
      </h1>
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
  );
}
