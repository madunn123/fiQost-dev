import { useState } from 'react';

export default function useFilter() {
  const [tab, setTab] = useState('harian');

  const handleFilter = (dayValue) => {
    setTab(dayValue);
  };

  return {
    tab,
    handleFilter,
  };
}
