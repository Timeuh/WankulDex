import {DecodedToken} from '@/app/_utils/appTypes';
import jwtDecode from 'jwt-decode';

export default function isTokenValid(token: string) {
  const decodedToken: DecodedToken = jwtDecode(token);
  return decodedToken.exp >= new Date('now').getTime();
}
