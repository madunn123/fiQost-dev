import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu';
import { BiHelpCircle } from 'react-icons/bi';
import { BsBuildingsFill } from 'react-icons/bs';
import { FiCreditCard } from 'react-icons/fi';
import { TbReportAnalytics, TbSettings } from 'react-icons/tb';
import Dashboard from '@/pages/Dashboard';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Air from '@/pages/Air';
import Wifi from '@/pages/Wifi';
import Listrik from '@/pages/Listrik';

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
    {
      path: '/air',
      element: <Air />,
      RequireAuth: true,
    },
    {
      path: '/listrik',
      element: <Listrik />,
      RequireAuth: true,
    },
    {
      path: '/wifi',
      element: <Wifi />,
      RequireAuth: true,
    },
  ];

  const routersPage = [
    { path: '/dashboard', name: 'Dasbor Saya', icons: <LuLayoutDashboard /> },
    {
      name: 'Fasilitas',
      icons: <BsBuildingsFill />,
      subMenu: [{ path: '/air', name: 'air' }, { path: '/listrik', name: 'listrik' }, { path: '/wifi', name: 'wifi' }],
    },
    { path: '/pembayaran', name: 'Tagihan', icons: <FiCreditCard /> },
    { path: '/keluhan', name: 'Laporan Keluhan', icons: <TbReportAnalytics /> },
    { path: '/pusat-bantuan', name: 'Bantuan', icons: <BiHelpCircle /> },
    { path: '/pusat-bantuan', name: 'Pengaturan', icons: <TbSettings /> },
    { path: '/pusat-bantuan', name: 'Logout', icons: <LuLogOut /> },
  ];

  const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const days = [
    'minggu',
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu',
  ];

  return {
    routes,
    routersPage,
    month,
    days,
  };
}
