import React from 'react';
import useFilter from '@/hooks/useFilter';
import Headline from '@/components/common/Headline';
import Filter from '@/components/dashboard/Filter';
import SummaryListrik from '@/components/listrik/SummaryListrik';
import BarChart from '@/components/listrik/BarChart';

export default function Listrik() {
  const { tab, handleFilter } = useFilter();

  return (
    <section className="flex flex-col gap-10">
      <Headline />
      <Filter handleFilter={handleFilter} tab={tab} />
      <SummaryListrik tab={tab} />
      <BarChart tab={tab} />
    </section>
  );
}
