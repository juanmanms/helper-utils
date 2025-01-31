'use client';

import React, { useState } from 'react';

const WindowsShortcuts: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [copied, setCopied] = useState<string | null>(null);

  const categories = [
    {
      name: 'Sistema',
      shortcuts: [
        { description: 'Abrir el menú de inicio', keys: 'Win' },
        { description: 'Abrir el Explorador de Archivos', keys: 'Win + E' },
        { description: 'Bloquear la pantalla', keys: 'Win + L' },
        { description: 'Abrir el Administrador de Tareas', keys: 'Ctrl + Shift + Esc' },
      ],
    },
    {
      name: 'Navegación',
      shortcuts: [
        { description: 'Cambiar entre ventanas abiertas', keys: 'Alt + Tab' },
        { description: 'Cerrar la ventana actual', keys: 'Alt + F4' },
        { description: 'Minimizar todas las ventanas', keys: 'Win + D' },
        { description: 'Abrir la Búsqueda de Windows', keys: 'Win + S' },
      ],
    },
    {
      name: 'Aplicaciones',
      shortcuts: [
        { description: 'Abrir la Configuración de Windows', keys: 'Win + I' },
        { description: 'Abrir el Centro de Actividades', keys: 'Win + A' },
        { description: 'Abrir la Calculadora', keys: 'Win + R, luego escribe "calc"' },
        { description: 'Abrir el Símbolo del Sistema', keys: 'Win + R, luego escribe "cmd"' },
      ],
    },
    {
      name: 'Edición de Texto',
      shortcuts: [
        { description: 'Copiar', keys: 'Ctrl + C' },
        { description: 'Pegar', keys: 'Ctrl + V' },
        { description: 'Cortar', keys: 'Ctrl + X' },
        { description: 'Deshacer', keys: 'Ctrl + Z' },
      ],
    },
  ];

  const handleCopy = (keys: string) => {
    navigator.clipboard.writeText(keys);
    setCopied(keys);
    setTimeout(() => setCopied(null), 2000); // Resetear después de 2 segundos
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    shortcuts: category.shortcuts.filter((shortcut) =>
      shortcut.description.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Atajos de Teclado de Windows</h2>

      {/* Buscador */}
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar atajos..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Listado de atajos */}
      {filteredCategories.map(
        (category) =>
          category.shortcuts.length > 0 && (
            <div key={category.name} className="bg-white p-4 rounded-lg shadow-md lg:grid lg:grid-cols-2 gap-4">
              <h3 className="text-xl font-semibold mb-2 col-span-2">{category.name}</h3>
              <ul className="space-y-2 col-span-2">
                {category.shortcuts.map((shortcut, index) => (
                  <li key={index} className="flex ">
                    <span>{shortcut.description}</span>-----------------
                    <button
                      onClick={() => handleCopy(shortcut.keys)}
                      className="text-blue-500 hover:underline"
                    >
                      {shortcut.keys} {copied === shortcut.keys && '✔️'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
      )}
    </div>
  );
};

export default WindowsShortcuts;