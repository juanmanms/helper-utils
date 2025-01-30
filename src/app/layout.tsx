import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Herramientas Informáticas',
  description: 'Herramientas útiles para el día a día en informática',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-blue-500 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Herramientas Informáticas</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}