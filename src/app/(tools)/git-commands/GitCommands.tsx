'use client';

import React from 'react';

const GitCommands: React.FC = () => {
    const commands = [
        {
            command: 'git init',
            description: 'Inicializa un nuevo repositorio Git en el directorio actual.',
        },
        {
            command: 'git clone <url>',
            description: 'Clona un repositorio remoto en tu máquina local.',
        },
        {
            command: 'git add <archivo>',
            description: 'Añade cambios en el archivo al área de preparación (staging).',
        },
        {
            command: 'git commit -m "mensaje"',
            description: 'Guarda los cambios en el repositorio con un mensaje descriptivo.',
        },
        {
            command: 'git status',
            description: 'Muestra el estado actual del repositorio (archivos modificados, en staging, etc.).',
        },
        {
            command: 'git push',
            description: 'Sube los cambios locales al repositorio remoto.',
        },
        {
            command: 'git pull',
            description: 'Obtiene los cambios del repositorio remoto y los fusiona con la rama local.',
        },
        {
            command: 'git branch',
            description: 'Muestra una lista de ramas en el repositorio.',
        },
        {
            command: 'git checkout <rama>',
            description: 'Cambia a la rama especificada.',
        },
        {
            command: 'git merge <rama>',
            description: 'Fusiona la rama especificada con la rama actual.',
        },
        {
            command: 'git log',
            description: 'Muestra el historial de commits en la rama actual.',
        },
        {
            command: 'git diff',
            description: 'Muestra las diferencias entre los cambios actuales y el último commit.',
        },
        {
            command: 'git reset <archivo>',
            description: 'Elimina el archivo del área de preparación (staging).',
        },
        {
            command: 'git remote -v',
            description: 'Muestra una lista de repositorios remotos configurados.',
        },
        {
            command: 'git fetch',
            description: 'Obtiene los cambios del repositorio remoto sin fusionarlos.',
        },
        {
            command: 'git rebase <rama>',
            description: 'Reaplica los commits de la rama actual sobre la rama especificada.',
        },
        {
            command: 'git stash',
            description: 'Guarda temporalmente los cambios no commitidos.',
        },
        {
            command: 'git tag <nombre>',
            description: 'Crea una etiqueta (tag) en el commit actual.',
        },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Comandos de Git</h2>
            <p className="text-gray-600">
                Aquí tienes una lista de comandos de Git comunes y su descripción.
            </p>

            {/* Listado de comandos */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {commands.map((cmd, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <code className="text-blue-500 font-mono">{cmd.command}</code>
                        <p className="text-gray-600 mt-2">{cmd.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GitCommands;