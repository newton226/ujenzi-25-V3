import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'UJENZI 25 | Your dream, Our foundation',
  description: 'Premium Tanzanian construction, property, and short-stay platform.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAF8] text-[#1A1A1A]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
