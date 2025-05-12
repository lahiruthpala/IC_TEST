import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import React, { ReactNode } from 'react';
import { AppProvider } from './provider';
import { LayoutShell } from './(portal)/(components)';

export const metadata = {
  title: {
    template: '%s | IC 2025',
    default: 'IC 2025',
  },
  description: 'Delegate Portal of AIESEC International Congress 2025',
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider><LayoutShell>{children}</LayoutShell></AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;

export const dynamic = 'force-dynamic';
