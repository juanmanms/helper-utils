import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Herramientas Informáticas
        </Link>
        {/* <ul className="flex space-x-4">
          <li>
            <Link href="/tools/password-generator" className="hover:underline">
              Generador de Contraseñas
            </Link>
          </li>
          <li>
            <Link href="/tools/regex-helper" className="hover:underline">
              Asistente de Regex
            </Link>
          </li>
          <li>
            <Link href="/tools/windows-shortcuts" className="hover:underline">
              Atajos de Windows
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Nav;