import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { setupMsw } from '~/mocks';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

if (process.env.NEXT_PUBLIC_MOCK_API) {
  setupMsw();
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
