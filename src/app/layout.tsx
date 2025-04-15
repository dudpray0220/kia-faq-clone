import './globals.css';
import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'KIA FAQ Clone',
  description: 'KIA FAQ Clone Project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="layout">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
