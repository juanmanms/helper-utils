'use client';

import React from 'react';
import Card from '../../../components/Card';

const IAList: React.FC = () => {
    const iaList = [
        {
            name: 'ChatGpt',
            description: 'ChatGPT es una IA que puede mantener conversaciones con humanos de manera natural.',
            link: 'https://chat.openai.com/',
        },
        {
            name: 'QWEN-2.5',
            description: 'QWEN-2.5 es la IA de alibaba.',
            link: 'https://chat.qwenlm.ai',
        },
        {
            name: 'Claudie',
            description: 'Claudie es una IA avanzada para la gestión de la nube.',
            link: 'https://claudie.ai',
        },
        {
            name: 'Copilot',
            description: 'Copilot es una IA que ayuda a los desarrolladores a escribir código más rápido.',
            link: 'https://github.com/features/copilot',
        },
        {
            name: 'Bolt',
            description: 'Bolt es una IA que optimiza el rendimiento de las aplicaciones.',
            link: 'https://bolt.new/',
        },
        {
            name: 'DeepSeek',
            description: 'DeepSeek es una IA para la búsqueda profunda de información.',
            link: 'https://chat.deepseek.com/',
        },
        {
            name: 'database.build',
            description: 'database.build es una IA para la creación de bases de datos.',
            link: 'https://database.build/',
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Listado de IA interesantes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {iaList.map((ia, index) => (
                    <Card
                        key={index}
                        title={ia.name}
                        description={ia.description}
                        href={ia.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default IAList;