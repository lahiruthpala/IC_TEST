import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import React, { ReactNode } from 'react';
<<<<<<< HEAD
import LayoutWrapper from './layout-wrapper';
import { AppProvider } from './provider';
=======
import { AppProvider } from './provider';
import { LayoutShell } from './(components)';
>>>>>>> 63a0d2e063c5310010489b06ff3741cf561102f0

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
<<<<<<< HEAD
        <AppProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AppProvider>
=======
        <AppProvider><LayoutShell>{children}</LayoutShell></AppProvider>
>>>>>>> 63a0d2e063c5310010489b06ff3741cf561102f0
      </body>
    </html>
  );
};

export default RootLayout;

export const dynamic = 'force-dynamic';
