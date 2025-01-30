'use client';

import React from 'react';
import usePasswordGenerator from '../../../hooks/usePasswordGenerator';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const PasswordGenerator: React.FC = () => {
  const {
    password,
    length,
    setLength,
    includeUppercase,
    setIncludeUppercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    usePhrase,
    setUsePhrase,
    generatePassword,
  } = usePasswordGenerator();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Generador de Contraseñas</h1>
        <div className="flex mb-6">
          <Input
            type="text"
            value={password}
            onChange={() => {}}
            className="flex-1 rounded-l-md"
            readOnly
          />
          <Button
            onClick={generatePassword}
            className="bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          >
            Generar
          </Button>
        </div>
        <div className="space-y-4">
          <Checkbox
            checked={usePhrase}
            onChange={setUsePhrase}
            label="Usar frase segura"
          />
          {!usePhrase && (
            <>
              <label className="flex items-center">
                <span className="mr-2">Longitud:</span>
                <Input
                  type="number"
                  value={length}
                  onChange={(value) => setLength(Number(value))}
                  min={4}
                  max={20}
                  className="w-16"
                />
              </label>
              <Checkbox
                checked={includeUppercase}
                onChange={setIncludeUppercase}
                label="Incluir mayúsculas"
              />
          <Checkbox
            checked={includeNumbers}
            onChange={setIncludeNumbers}
            label="Incluir números"
            />
          <Checkbox
            checked={includeSymbols}
            onChange={setIncludeSymbols}
            label="Incluir símbolos"
            />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;