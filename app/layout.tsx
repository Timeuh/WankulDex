import './globals.css';
import type {Metadata} from 'next';
import {Nunito} from 'next/font/google';
import {ReactNode} from 'react';
import {CookiesProvider} from 'react-cookie';

const nunito = Nunito({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'WankulDex - Accueil',
  description: 'Un site pour consulter vos cartes Wankul',
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang='fr'>
      <body className={nunito.className}>
        <CookiesProvider>{children}</CookiesProvider>
      </body>
    </html>
  );
}
