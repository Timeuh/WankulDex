import Cookies from 'universal-cookie/lib';

export default function setAuthCookie(value: string) {
  const cookies = new Cookies();

  if (!process.env.NEXT_PUBLIC_API_COOKIE) {
    return;
  }

  cookies.set(process.env.NEXT_PUBLIC_API_COOKIE, value);
}
