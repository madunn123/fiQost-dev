import React from 'react';
import { BsFilter } from 'react-icons/bs';

export default function Filter({ tab, handleFilter }) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="flex flex-row items-center gap-0 text-sm">
        <button
          type="button"
          className={`capitalize border-2 border-r-0 p-3 rounded-tl-lg rounded-bl-lg ${tab === 'harian' && ' bg-main-color text-white'}`}
          onClick={() => handleFilter('harian')}
        >
          harian
        </button>
        <button
          type="button"
          className={`p-3 capitalize border-2 border-r-0 border-slate-200 ${tab === 'mingguan' && 'bg-main-color text-white'}`}
          onClick={() => handleFilter('mingguan')}
        >
          mingguan
        </button>
        <button
          type="button"
          className={`p-3 capitalize border-2 rounded-tr-lg rounded-br-lg border-slate-200 ${tab === 'bulanan' && 'bg-main-color text-white'}`}
          onClick={() => handleFilter('bulanan')}
        >
          bulanan
        </button>
      </div>

      <input type="date" className="p-3 ml-2 text-sm rounded-lg bg-thirdy-color" />
      <button type="button" className="flex flex-row items-center gap-2 p-3 text-sm rounded-lg bg-thirdy-color">
        Filter
        {' '}
        <BsFilter />
      </button>
    </div>
  );
}
