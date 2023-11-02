import {NextRequest, NextResponse} from 'next/server';
import isAdminLogged from '@utils/isAdminLogged';

export function middleware(request: NextRequest) {
  if (!isAdminLogged(request.cookies)) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: '/admin/create/:path*',
};
