import { Outlet } from '@reactpwa/core';
import { FC } from 'react';

const Error404: FC = () => (
  <div>
    <h1>Error 404</h1>
    <Outlet />
  </div>
);

export default Error404;
