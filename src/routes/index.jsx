import { Route, Routes } from 'react-router-dom';
import Constant from '@/utils/constant';
import BaseLayout from '@/components/layout/Baselayout';

export default function Routers() {
  const { routes } = Constant();

  return (
    <BaseLayout>
      <Routes>
        {
        routes?.map((route) => (
          <Route key={route?.path} path={route?.path} element={route?.element} />
        ))
      }
      </Routes>
    </BaseLayout>
  );
}
