import {NextRequest, NextResponse} from 'next/server';
import isTokenValid from '@/app/_utils/isTokenValid';

export function middleware(request: NextRequest) {
  const authTokenKey = process.env.NEXT_PUBLIC_API_COOKIE;
  if (!authTokenKey) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  const authToken = request.cookies.get(authTokenKey);
  if (!authToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  if (!isTokenValid(authToken.value)) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: '/admin/create/:path*',
};
