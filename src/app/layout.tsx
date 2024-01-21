import { NextQueryClientProvider } from '@/utils/reactQueryClientProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'React.js | Next.js Exercise App',
  description: 'React.js | Next.js Exercise App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NextQueryClientProvider>{children}</NextQueryClientProvider>
      </body>
    </html>
  );
}
