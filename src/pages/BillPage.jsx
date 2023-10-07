import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '@/utils/helper';
import useFilter from '@/hooks/useFilter';
import Filter from '@/components/bill/Filter';

const billData = {
  mingguan: [
    { fasilitas: 'sewa kamar', penggunaan: '7 hari', biaya: 225000 },
    { fasilitas: 'air', penggunaan: '14 m3', biaya: 40000 },
    { fasilitas: 'listrik', penggunaan: '24 kWh', biaya: 25000 },
    { fasilitas: 'wifi', penggunaan: '12 Gb', biaya: 75000 },
  ],
  bulanan: [
    { fasilitas: 'sewa kamar', penggunaan: '30 hari', biaya: 3000000 },
    { fasilitas: 'air', penggunaan: '100 m3', biaya: 1000000 },
    { fasilitas: 'listrik', penggunaan: '200 kWh', biaya: 800000 },
    { fasilitas: 'wifi', penggunaan: '120 Gb', biaya: 300000 },
  ],
};

export default function BillPage() {
  const userWithRoomNumber = getFromLocalStorage('user');
  const { tab: topTab, handleFilter: handleTopFilter } = useFilter();
  const [bottomTab, setBottomTab] = useState('mingguan'); // State untuk filter bagian bawah
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    handleTopFilter('mingguan');
  }, []);

  const toggleCheckbox = (item) => {
    setSelectedItems((prev) => (prev.includes(item.fasilitas)
      ? prev.filter((fasilitas) => fasilitas !== item.fasilitas)
      : [...prev, item.fasilitas]));
  };

  const toggleSelectAll = () => {
    const allFasilitas = billData[topTab]?.map((item) => item.fasilitas) || [];
    setSelectedItems((prev) => (prev.length === allFasilitas.length ? [] : allFasilitas));
  };

  const topData = billData[topTab] || [];
  const bottomData = billData[bottomTab] || topData;

  const totalBiaya = topData.reduce(
    (total, item) => total + (selectedItems.includes(item.fasilitas) ? item.biaya : 0),
    0,
  );

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between p-6 py-10 rounded-md bg-thirdy-color popins-font">
        <h1 className="m-0 text-4xl font-semibold text-main-color">
          Kamar
          {' '}
          {userWithRoomNumber?.roomNumber}
        </h1>
      </div>

      <Filter tab={topTab} handleFilter={handleTopFilter} />

      <table className="text-left border table-auto border-slate-300">
        <thead className="border border-slate-200">
          <tr>
            <th className="p-4 bg-thirdy-color inter-font text-main-color">
              <input
                type="checkbox"
                checked={
                  selectedItems.length === topData.length
                  && selectedItems.length > 0
                }
                onChange={toggleSelectAll}
                className="p-3 ml-2 text-sm rounded-lg bg-thirdy-color"
              />
            </th>
            <th className="p-4 bg-thirdy-color inter-font text-main-color">
              Fasilitas
            </th>
            <th className="p-4 bg-thirdy-color inter-font text-main-color">
              Penggunaan
            </th>
            <th className="p-4 bg-thirdy-color inter-font text-main-color">
              Biaya
            </th>
          </tr>
        </thead>
        <tbody className="capitalize inter-font">
          {topData.map((item, index) => (
            <tr key={index}>
              <td className="p-4">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.fasilitas)}
                  onChange={() => toggleCheckbox(item)}
                  className="p-3 ml-2 text-sm rounded-lg bg-thirdy-color"
                />
              </td>
              <td className="p-4">{item.fasilitas}</td>
              <td className="p-4">{item.penggunaan}</td>
              <td className="p-4">{`Rp ${item.biaya.toLocaleString()}`}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4" />
            <td className="p-4" />
            <td className="p-4 text-lg font-semibold text-main-color">
              Jumlah:
            </td>
            <td className="p-4 text-lg font-semibold text-main-color">{`Rp ${totalBiaya.toLocaleString()}`}</td>
          </tr>
        </tfoot>
      </table>

      <Filter tab={bottomTab} handleFilter={(tab) => setBottomTab(tab)} />
    </section>
  );
}
