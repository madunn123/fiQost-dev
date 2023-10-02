import React from 'react';
import useFilter from '@/hooks/useFilter';
import Headline from '@/components/common/Headline';
import Filter from '@/components/dashboard/Filter';
import SummaryAir from '@/components/common/air/SummaryAir';
import BarChart from '@/components/common/air/BarChart';

export default function Air() {
  const { tab, handleFilter } = useFilter();

  return (
    <section className="flex flex-col gap-10">
      <Headline />
      <Filter handleFilter={handleFilter} tab={tab} />
      <SummaryAir tab={tab} />
      <BarChart tab={tab} />
    </section>
  );
}
