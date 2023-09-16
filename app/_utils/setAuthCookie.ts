import {CookieSetOptions} from 'universal-cookie';

export default function setAuthCookie(
  setCookie: {
    (name: string, value: any, options?: CookieSetOptions | undefined): void;
    (arg0: string, arg1: any): void;
  },
  value: string,
) {
  if (!process.env.API_COOKIE) {
    return;
  }

  setCookie(process.env.API_COOKIE, value);
}
