'use client';

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Container, LoadingOverlay } from '@mantine/core';
<<<<<<< HEAD
import { AdminDashboard, UserDashboard } from './(portal)/(components)';
=======
import { AdminDashboard, UserDashboard } from './(components)';
>>>>>>> 63a0d2e063c5310010489b06ff3741cf561102f0

export default function ClientHomePage() {
  const { permissions, isLoading: isAuthLoading } = useKindeBrowserClient();

  const isAdmin = permissions?.permissions?.includes('dx:admin');

  return (
    <Container fluid p="md">
      {isAuthLoading ? <LoadingOverlay /> : isAdmin ? <AdminDashboard /> : <UserDashboard />}
    </Container>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 63a0d2e063c5310010489b06ff3741cf561102f0
