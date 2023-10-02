import React from 'react';
import useFilter from '@/hooks/useFilter';
import Headline from '@/components/common/air/Headline';
import Filter from '@/components/dashboard/Filter';
import Summary from '@/components/common/air/SummaryAir';

export default function Air() {
  const { tab, handleFilter } = useFilter();

  return (
    <section>
      <Headline />
      <Filter handleFilter={handleFilter} tab={tab} />
      <Summary />
    </section>
  );
}
