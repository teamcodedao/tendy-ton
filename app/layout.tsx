import type {Metadata} from 'next';
import {Slackey} from 'next/font/google';
import './globals.css';

const font = Slackey({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tendy',
  description: 'Tendy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
