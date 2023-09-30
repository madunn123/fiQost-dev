import { LuLayoutDashboard } from 'react-icons/lu';
import { MdElectricBolt } from 'react-icons/md';
import { IoIosWater } from 'react-icons/io';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
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
    { path: '/dashboard', name: 'dashboard', icons: <LuLayoutDashboard /> },
    { path: '/listrik', name: 'listrik', icons: <MdElectricBolt /> },
    { path: '/air', name: 'air', icons: <IoIosWater /> },
    { path: '/wifi', name: 'wifi', icons: <AiOutlineWifi /> },
    { path: '/pusat-bantuan', name: 'pusat bantuan', icons: <BiHelpCircle /> },
  ];

  return {
    routes,
    routersPage,
  };
}
