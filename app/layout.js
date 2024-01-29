import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/store/provider';
import Header from '@/components/custom/header';
import Modal from '@/components/ui/modal';
import Sidebar from '@/components/custom/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Booard',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Modal />
          <Header />
          <div className="flex !max-h-[calc(100dvh_-_53px)] h-screen bg-zinc-100">
            <Sidebar />
            <main className="p-4">{children}</main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
