import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {API_DOMAIN} from '@/app/_utils/appConsts';
import {AuthMessage} from '@/app/_utils/appTypes';

export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get('wankul-admin-token');
  const authHeader = process.env.API_AUTH_HEADER;

  if (!authToken || !authHeader) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  const authResponse: AuthMessage = await fetch(`${API_DOMAIN}/auth/verify`, {
    method: 'GET',
    headers: {
      [authHeader]: authToken.value,
    },
  }).then((response) => {
    return response.json();
  });

  if (authResponse.code !== 200) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: '/admin/create/:path*',
};
