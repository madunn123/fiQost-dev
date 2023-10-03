import React from 'react';
import Cards from './Cards';

export default function SummaryListrik({ tab }) {
  const kwh = {
    harian: ['4 kWh'],
    mingguan: ['36 kWh'],
    bulanan: ['256 kWh'],
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
