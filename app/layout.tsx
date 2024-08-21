import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Header />
        <main className="pb-10"> {/* Adds padding at the bottom */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}