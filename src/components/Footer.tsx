import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Herramientas Informáticas. Todos los derechos
          reservados.
        </p>
        <p className="mt-2">
          Desarrollado con ❤️ por{' '}
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Tu Nombre
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;