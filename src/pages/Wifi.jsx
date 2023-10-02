import React from 'react';
import useFilter from '@/hooks/useFilter';
import Headline from '@/components/common/Headline';
import Filter from '@/components/dashboard/Filter';
import SummaryWifi from '@/components/common/wifi/SummaryWifi';
import BarChart from '@/components/common/wifi/BarChart';

export default function Wifi() {
  const { tab, handleFilter } = useFilter();
  return (
    <section className="flex flex-col gap-10">
      <Headline />
      <Filter handleFilter={handleFilter} tab={tab} />
      <SummaryWifi tab={tab} />
      <BarChart tab={tab} />
    </section>
  );
}
