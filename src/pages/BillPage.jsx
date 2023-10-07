import React from 'react';
import { getFromLocalStorage } from '@/utils/helper';
import useFilter from '@/hooks/useFilter';

export default function BillPage() {
  const userWithRoomNumber = getFromLocalStorage('user');

  const { tab, handleFilter } = useFilter();

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between p-6 py-10 rounded-md bg-thirdy-color popins-font">
        <h1 className="m-0 text-4xl font-semibold text-main-color">
          Kamar
          {' '}
          {userWithRoomNumber?.roomNumber}
        </h1>
      </div>

      <div className="flex flex-row items-center justify-end gap-4">
        <input type="date" className="p-3 ml-2 text-sm rounded-lg bg-thirdy-color" />
        <div className="flex flex-row items-center gap-0 text-sm inter-font">
          <button
            type="button"
            className={`capitalize border-2 border-r-0 p-3 px-6 rounded-tl-lg rounded-bl-lg ${tab === 'mingguan' || tab === 'harian' ? ' bg-main-color text-white' : ''}`}
            onClick={() => handleFilter('diterima')}
          >
            Mingguan
          </button>
          <button
            type="button"
            className={`p-3 px-6 capitalize border-2 rounded-tr-lg rounded-br-lg border-slate-200 ${tab === 'bulanan' && 'bg-main-color text-white'}`}
            onClick={() => handleFilter('selesai')}
          >
            Bulanan
          </button>
        </div>
      </div>

      <table className="text-left border table-auto border-slate-300">
        <thead className="border border-slate-200">
          <tr>
            <th className="p-4 bg-thirdy-color inter-font text-main-color">Fasilitas</th>
            <th className="p-4 bg-thirdy-color inter-font text-main-color">Penggunaan</th>
            <th className="p-4 bg-thirdy-color inter-font text-main-color">Biaya</th>
          </tr>
        </thead>
        <tbody className="capitalize inter-font">
          <tr>
            <td className="p-4">sewa kamar</td>
            <td className="p-4">7 hari</td>
            <td className="p-4">Rp 225.000</td>
          </tr>
          <tr>
            <td className="p-4">air</td>
            <td className="p-4">14m3</td>
            <td className="p-4">Rp 40.000</td>
          </tr>
          <tr>
            <td className="p-4">listrik</td>
            <td className="p-4">24 kWh</td>
            <td className="p-4">Rp 25.000</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
