import React from 'react';
import Cards from './Cards';

export default function SummaryAir({ tab }) {
  const kwh = {
    harian: ['18 m3'],
    mingguan: ['89 m3'],
    bulanan: ['256 m3'],
  }[tab];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="m-0 text-xl font-bold capitalize text-black">Ringkasan</h1>
      <div className="flex flex-row gap-6">
        {kwh?.map((item, idx) => (
          <Cards kwh={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
