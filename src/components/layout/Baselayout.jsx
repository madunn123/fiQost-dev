import React from 'react';
import { useLocation } from 'react-router-dom';
import LeftBar from '../common/LeftBar';
import RightBar from '../common/RightBar';
import Navbar from '../common/Navbar';

export default function BaseLayout({ children }) {
  const location = useLocation();

  return (
    <div className="relative">
      {
        location.pathname !== '/' && location.pathname !== '/register' && (
        <header className="flex flex-row justify-between">
          <LeftBar />
          <Navbar />
          <RightBar />
        </header>
        )
      }

      <div className="absolute left-0 flex justify-center w-full top-14">
        {children}
      </div>
    </div>
  );
}
