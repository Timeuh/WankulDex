'use client';

import {ReactNode} from 'react';
import {CookiesProvider} from 'react-cookie';

type Props = {
  children: ReactNode;
};

export default function Cookies({children}: Props) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
