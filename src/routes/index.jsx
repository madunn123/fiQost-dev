import { Route, Routes } from 'react-router-dom';
import Constant from '@/utils/constant';
import BaseLayout from '@/components/layout/Baselayout';
import AuthProvider from '@/context/authContext';

export default function Routers() {
  const { routes } = Constant();

  return (
    <AuthProvider>
      <BaseLayout>
        <Routes>
          {
        routes?.map((route) => (
          <Route key={route?.path} path={route?.path} element={route?.element} />
        ))
      }
        </Routes>
      </BaseLayout>
    </AuthProvider>
  );
}
