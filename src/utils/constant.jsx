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
import ComplaintReport from '@/pages/ComplaintReport';
import BillPage from '@/pages/BillPage';

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
    {
      path: '/laporan-keluhan',
      element: <ComplaintReport />,
      RequireAuth: true,
    },
    {
      path: '/pembayaran',
      element: <BillPage />,
      RequireAuth: true,
    },
  ];

  const routersPage = [
    { path: '/dashboard', name: 'Dasbor Saya', icons: <LuLayoutDashboard /> },
    {
      name: 'Fasilitas',
      icons: <BsBuildingsFill />,
      subMenu: [{ path: '/air', name: 'Air' }, { path: '/listrik', name: 'Listrik' }, { path: '/wifi', name: 'Wifi' }],
    },
    { path: '/laporan-keluhan', name: 'Laporan Keluhan', icons: <TbReportAnalytics /> },
    { path: '/pembayaran', name: 'Tagihan', icons: <FiCreditCard /> },
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
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
    'Minggu',
  ];

  const weeks = [
    'Minggu ke - 1',
    'Minggu ke - 2',
    'Minggu ke - 3',
    'Minggu ke - 4',
    'Minggu ke - 5',
  ];

  return {
    routes,
    routersPage,
    month,
    days,
    weeks,
  };
}
