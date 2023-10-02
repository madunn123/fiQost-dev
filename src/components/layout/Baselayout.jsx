import React from 'react';
import Sidebar from '../common/Sidebar';
import Navbar from '../common/Navbar';

export default function BaseLayout({ children }) {
  return (
    <section className="relative grid grid-cols-6 gap-0">
      <Sidebar />
      <section className="flex flex-col col-span-5 gap-0">
        <Navbar />
        <div className="p-6 bg-white">
          {children}
        </div>
      </section>
    </section>
  );
}
