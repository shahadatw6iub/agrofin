import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/RainbowKitProvider';

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
      >    <Providers>
          <Header />
          <main className=""> {/* Adds padding at the bottom */}
            {children}
          </main>
          <Footer />
        </Providers>

      </body>
    </html>
  );
}