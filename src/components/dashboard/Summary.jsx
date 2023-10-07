import React from 'react';
import Cards from './Cards';

export default function Summary({ tab }) {
  const kwhData = {
    harian: ['4 kwh', '18 m3', '14 Gb'],
    mingguan: ['6 kwh', '10 m3', '4 Gb'],
    bulanan: ['9 kwh', '2 m3', '100 Gb'],
  }[tab];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="m-0 text-xl font-bold text-black capitalize popins-font">Ringkasan</h1>
      <div className="flex flex-row gap-6">
        {kwhData.map((item, idx) => (
          <Cards kwh={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
