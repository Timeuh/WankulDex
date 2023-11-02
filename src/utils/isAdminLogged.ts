import {DecodedToken} from '@/app/_utils/appTypes';
import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie/lib';
import {RequestCookies} from 'next/dist/compiled/@edge-runtime/cookies';

export default function isAdminLogged(requestCookies?: RequestCookies) {
  const cookieName = process.env.NEXT_PUBLIC_API_COOKIE;

  if (!cookieName) {
    return false;
  }

  const cookies = new Cookies(requestCookies, {path: '/'});
  const token = requestCookies ? requestCookies.get(cookieName)?.value : cookies.get(cookieName);

  if (!token) {
    return false;
  }

  const decodedToken: DecodedToken = jwtDecode(token);
  return decodedToken.exp >= Math.floor(new Date().getTime() / 1000);
}
