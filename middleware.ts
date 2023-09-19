import {NextRequest, NextResponse} from 'next/server';
import jwtDecode from 'jwt-decode';

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

  const decodedToken = jwtDecode(authToken.value);
  console.log(decodedToken);
  if (decodedToken.exp <= new Date('now').getTime()) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: '/admin/create/:path*',
};
