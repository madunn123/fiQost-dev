import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu';
import { BiHelpCircle } from 'react-icons/bi';
import { BsBuildingsFill } from 'react-icons/bs';
import { FiCreditCard } from 'react-icons/fi';
import { TbReportAnalytics, TbSettings } from 'react-icons/tb';
import Dashboard from '@/pages/Dashboard';
import Register from '@/pages/Register';
import Login from '@/pages/Login';

export default function Constant() {
  const routes = [
    {
      path: '/',
      element: <Login />,
      RequireAuth: false,
    },
    {
      path: '/register',
      element: <Register />,
      RequireAuth: false,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      RequireAuth: true,
    },
  ];

  const routersPage = [
    { path: '/dashboard', name: 'Dasbor Saya', icons: <LuLayoutDashboard /> },
    { path: '/fasilitas', name: 'Fasilitas', icons: <BsBuildingsFill className="flip-horizontal" /> },
    { path: '/keluhan', name: 'Laporan Keluhan', icons: <TbReportAnalytics /> },
    { path: '/pembayaran', name: 'Tagihan', icons: <FiCreditCard /> },
    { path: '/pusat-bantuan', name: 'Bantuan', icons: <BiHelpCircle /> },
    { path: '/pusat-bantuan', name: 'Pengaturan', icons: <TbSettings /> },
    { path: '/pusat-bantuan', name: 'Logout', icons: <LuLogOut /> },
  ];

  return {
    routes,
    routersPage,
  };
}
