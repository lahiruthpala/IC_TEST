<<<<<<< HEAD
export const PUBLIC_ROUTES = ['/api/auth/login', '/api/auth/register', '/ysf' ] as const;

export const LAYOUT_EXEMPT_ROUTES = ['/ysf'] as const;
=======
export const PUBLIC_ROUTES = ['/api/auth/login', '/api/auth/register'] as const;
>>>>>>> 63a0d2e063c5310010489b06ff3741cf561102f0

export const ROUTE_PERMISSIONS = {
  '/admin': ['dx:admin'],
  '/admin/store': ['dx:admin'],
  '/delegates': ['dx:admin'],
} as const;

export const PERMISSIONS = {
  ADMIN: 'dx:admin',
} as const;