import {DecodedToken} from '@/app/_utils/appTypes';
import jwtDecode from 'jwt-decode';

export default function isTokenValid(token: string) {
  const decodedToken: DecodedToken = jwtDecode(token);
  return decodedToken.exp >= Math.floor(new Date().getTime() / 1000);
}
