'use client';

import React, { useState } from 'react';

const RegexHelper: React.FC = () => {
  const [regex, setRegex] = useState<string>('');
  const [testText, setTestText] = useState<string>('');
  const [matches, setMatches] = useState<RegExpMatchArray | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTestRegex = () => {
    try {
      const regexObj = new RegExp(regex, 'g');
      const matches = testText.match(regexObj);
      setMatches(matches);
      setError(null);
    } catch {
      setError('Expresión regular inválida');
      setMatches(null);

    }
  };

  const examples = [
    {
      name: 'Validar correo electrónico',
      regex: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
    },
    {
      name: 'Validar URL',
      regex: '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$',
    },
    {
      name: 'Extraer números',
      regex: '\\d+',
    },
    {
      name: 'Validar fecha (YYYY-MM-DD)',
      regex: '^\\d{4}-\\d{2}-\\d{2}$',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Asistente de Regex</h2>

      {/* Editor de Regex */}
      <div>
        <label className="block text-sm font-medium mb-1">Expresión Regular</label>
        <input
          type="text"
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
          placeholder="Ingresa tu regex aquí"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Campo de prueba */}
      <div>
        <label className="block text-sm font-medium mb-1">Texto de Prueba</label>
        <textarea
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Ingresa el texto para probar el regex"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </div>

      {/* Botón de prueba */}
      <button
        onClick={handleTestRegex}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Probar Regex
      </button>

      {/* Resultados */}
      {error && <p className="text-red-500">{error}</p>}
      {matches && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Coincidencias</h3>
          <ul className="list-disc list-inside">
            {matches.map((match, index) => (
              <li key={index}>{match}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Ejemplos predefinidos */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Ejemplos Predefinidos</h3>
        <ul className="space-y-2">
          {examples.map((example, index) => (
            <li key={index}>
              <button
                onClick={() => setRegex(example.regex)}
                className="text-blue-500 hover:underline"
              >
                {example.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegexHelper;