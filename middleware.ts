import {NextRequest, NextResponse} from 'next/server';
import jwtDecode from 'jwt-decode';
import {DecodedToken} from '@/app/_utils/appTypes';

export function middleware(request: NextRequest) {
  const authHeader = process.env.NEXT_PUBLIC_API_AUTH_HEADER;
  const authTokenKey = process.env.NEXT_PUBLIC_API_COOKIE;
  if (!authTokenKey || !authHeader) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  const authToken = request.cookies.get(authTokenKey);
  if (!authToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  const decodedToken: DecodedToken = jwtDecode(authToken.value);
  if (decodedToken.exp <= new Date('now').getTime()) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: '/admin/create/:path*',
};
