import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Navbar from '../common/Navbar';

export default function BaseLayout({ children }) {
  const location = useLocation();

  return (
    <section className="relative grid grid-cols-6 gap-0">
      {location.pathname !== '/' && location.pathname !== '/register' && <Sidebar />}
      <section className={location.pathname !== '/' && location.pathname !== '/register' ? 'flex flex-col col-span-5 gap-0' : 'col-span-6'}>
        {location.pathname !== '/' && location.pathname !== '/register' && <Navbar />}
        <div className={location.pathname !== '/' && location.pathname !== '/register' && 'p-6 bg-white'}>
          {children}
        </div>
      </section>
    </section>
  );
}
