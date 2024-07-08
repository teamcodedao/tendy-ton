import type {Metadata} from 'next';
import {Slackey} from 'next/font/google';
import './globals.css';

const font = Slackey({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DOG BY MATT FURIE',
  description:
    "TENDY - Inspired by a based Matt Furie character came to conquer Dog Meta on TON. The next banger to the 'Matt Furie Club'",
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
