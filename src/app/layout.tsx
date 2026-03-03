import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import GoToTop from '@/components/GoToTop';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'SQAT - Software Quality Assurance & Testing Club | Empowering Future Developers',
  description: 'Official website of SQAT Club - Empowering the next generation of software developers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <GoToTop />
        <Toaster />
      </body>
    </html>
  );
}
