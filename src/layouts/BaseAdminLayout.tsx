import React, { PropsWithChildren } from 'react';
import { AdminHeader } from '@ui';

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <main className="base-main">{children}</main>
    </>
  );
};

export default BaseLayout;
