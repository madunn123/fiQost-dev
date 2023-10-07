import React from 'react';

export default function Filter({ tab, handleFilter }) {
  return (
    <div className="flex flex-row items-center justify-end gap-4">
      <input type="date" className="p-3 ml-2 text-sm rounded-lg bg-thirdy-color" />
      <div className="flex flex-row items-center gap-0 text-sm inter-font">
        <button
          type="button"
          className={`capitalize border-2 border-r-0 p-3 px-6 rounded-tl-lg rounded-bl-lg ${tab === 'mingguan' ? ' bg-main-color text-white' : ''}`}
          onClick={() => handleFilter('mingguan')}
        >
          Mingguan
        </button>
        <button
          type="button"
          className={`p-3 px-6 capitalize border-2 rounded-tr-lg rounded-br-lg border-slate-200 ${tab === 'bulanan' ? 'bg-main-color text-white' : ''}`}
          onClick={() => handleFilter('bulanan')}
        >
          Bulanan
        </button>
      </div>
    </div>
  );
}
