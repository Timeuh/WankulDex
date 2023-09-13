import './globals.css';
import type {Metadata} from 'next';
import {Nunito} from 'next/font/google';
import {ReactNode} from 'react';
import Providers from '@components/Providers';
import Navbar from '@components/navbar/Navbar';

const nunito = Nunito({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'WankulDex - Accueil',
  description: 'Un site pour consulter vos cartes Wankul',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({children}: Props) {
  return (
    <html lang='fr'>
      <body className={nunito.className}>
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
