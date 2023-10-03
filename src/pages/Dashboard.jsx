import React from 'react';
import ComplaintReport from '@/components/dashboard/ComplaintReport';
import LastNotification from '@/components/dashboard/LastNotification';
import Summary from '@/components/dashboard/Summary';
import Filter from '@/components/dashboard/Filter';
import Headline from '@/components/dashboard/Headline';
import useFilter from '@/hooks/useFilter';

export default function Dashboard() {
  const { tab, handleFilter } = useFilter();

  return (
    <section className="flex flex-col gap-10">
      <Headline />
      <Filter handleFilter={handleFilter} tab={tab} />
      <Summary tab={tab} />

      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-4">
          <ComplaintReport tab={tab} />
        </div>
        <div className="col-span-2">
          <LastNotification />
        </div>
      </div>
    </section>
  );
}
