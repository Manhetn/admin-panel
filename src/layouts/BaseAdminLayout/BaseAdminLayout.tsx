import { AdminHeader } from '@ui';
import React, { PropsWithChildren } from 'react';

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <main className="base-main">{children}</main>
    </>
  );
};

export default BaseLayout;
