import React from 'react';
import { getFromLocalStorage } from '@/utils/helper';

export default function Headline() {
  const userWithRoomNumber = getFromLocalStorage('user');

  return (
    <div className="flex flex-col gap-4 p-6 rounded-md bg-thirdy-color">
      <h1 className="m-0 text-5xl font-bold capitalize text-main-color">
        kamar
        {' '}
        {userWithRoomNumber?.roomNumber}
      </h1>
    </div>
  );
}
