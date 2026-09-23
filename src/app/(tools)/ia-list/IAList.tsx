'use client';

import React, { useState } from 'react';
import Card from '../../../components/Card';

interface IA {
    name: string;
    description: string;
    link: string;
    category: 'conversacion' | 'desarrollo' | 'imagen' | 'audio' | 'busqueda' | 'database' | 'video' | 'utilidades';
}

const IAList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const iaList: IA[] = [
        // Conversación
        {
            name: 'ChatGPT',
            description: 'IA conversacional multiusos de OpenAI. Excelente para escritura, análisis y brainstorming.',
            link: 'https://chat.openai.com/',
            category: 'conversacion',
        },
        {
            name: 'Claude',
            description: 'IA de Anthropic con excelentes capacidades de razonamiento. Ideal para análisis profundo.',
            link: 'https://claude.ai',
            category: 'conversacion',
        },
        {
            name: 'Gemini',
            description: 'IA multimodal de Google. Integrada con servicios de Google.',
            link: 'https://gemini.google.com/',
            category: 'conversacion',
        },
        {
            name: 'Grok',
            description: 'IA de xAI con acceso a información en tiempo real (X/Twitter).',
            link: 'https://grok.com/',
            category: 'conversacion',
        },
        {
            name: 'QWEN-2.5',
            description: 'IA conversacional de Alibaba. Rápida y eficiente.',
            link: 'https://chat.qwenlm.ai',
            category: 'conversacion',
        },
        {
            name: 'DeepSeek',
            description: 'IA china con capacidades avanzadas de razonamiento y análisis.',
            link: 'https://chat.deepseek.com/',
            category: 'conversacion',
        },
        // Desarrollo
        {
            name: 'GitHub Copilot',
            description: 'Asistente de código AI directamente en tu editor. Escribe código más rápido.',
            link: 'https://github.com/features/copilot',
            category: 'desarrollo',
        },
        {
            name: 'Bolt.new',
            description: 'Crea aplicaciones web completas con IA. Full-stack development.',
            link: 'https://bolt.new/',
            category: 'desarrollo',
        },
        {
            name: 'V0',
            description: 'Generador de componentes React/Next.js con IA. Vercel AI.',
            link: 'https://v0.dev/',
            category: 'desarrollo',
        },
        {
            name: 'database.build',
            description: 'Crea y gestiona bases de datos con IA. SQL queries automáticas.',
            link: 'https://database.build/',
            category: 'database',
        },
        {
            name: 'Cursor',
            description: 'Editor de código AI-first. Basado en VS Code con superpotencias AI.',
            link: 'https://cursor.com/',
            category: 'desarrollo',
        },
        // Imagen
        {
            name: 'Midjourney',
            description: 'Generador de imágenes de alta calidad. Ideal para arte y diseño.',
            link: 'https://midjourney.com/',
            category: 'imagen',
        },
        {
            name: 'DALL-E',
            description: 'Generador de imágenes de OpenAI. Accesible y versátil.',
            link: 'https://openai.com/dall-e-3/',
            category: 'imagen',
        },
        {
            name: 'Leonardo.ai',
            description: 'Generador de imágenes con control avanzado. Modelos personalizables.',
            link: 'https://leonardo.ai/',
            category: 'imagen',
        },
        {
            name: 'Stable Diffusion',
            description: 'Modelo de generación de imágenes de código abierto. Descentralizado.',
            link: 'https://stablediffusionweb.com/',
            category: 'imagen',
        },
        // Audio
        {
            name: 'ElevenLabs',
            description: 'Síntesis de voz natural con IA. Ideal para podcasts y audiobooks.',
            link: 'https://elevenlabs.io/',
            category: 'audio',
        },
        {
            name: 'Murf.ai',
            description: 'Generador de voces en off con IA. Múltiples idiomas y tonos.',
            link: 'https://murf.ai/',
            category: 'audio',
        },
        // Búsqueda
        {
            name: 'Perplexity',
            description: 'Motor de búsqueda con IA. Respuestas citadas y en tiempo real.',
            link: 'https://perplexity.ai/',
            category: 'busqueda',
        },
        {
            name: 'Tavily',
            description: 'API de búsqueda inteligente para desarrolladores.',
            link: 'https://tavily.com/',
            category: 'busqueda',
        },
        // Video
        {
            name: 'Runway',
            description: 'Edición de video con IA. Generación y manipulación de video.',
            link: 'https://runwayml.com/',
            category: 'video',
        },
        {
            name: 'Synthesia',
            description: 'Crea videos con avatares IA. Ideal para presentaciones.',
            link: 'https://www.synthesia.io/',
            category: 'video',
        },
        // Utilidades
        {
            name: 'Udio',
            description: 'Generador de música con IA. Crea canciones originales.',
            link: 'https://www.udio.com/',
            category: 'utilidades',
        },
        {
            name: 'Dify',
            description: 'Plataforma no-code para crear aplicaciones con IA.',
            link: 'https://dify.ai/',
            category: 'utilidades',
        },
    ];

    const categories = [
        { id: 'all', label: '📋 Todas', icon: '📋' },
        { id: 'conversacion', label: '💬 Conversación', icon: '💬' },
        { id: 'desarrollo', label: '💻 Desarrollo', icon: '💻' },
        { id: 'imagen', label: '🎨 Imagen', icon: '🎨' },
        { id: 'audio', label: '🎤 Audio', icon: '🎤' },
        { id: 'video', label: '🎬 Video', icon: '🎬' },
        { id: 'busqueda', label: '🔍 Búsqueda', icon: '🔍' },
        { id: 'database', label: '🗄️ Base de Datos', icon: '🗄️' },
        { id: 'utilidades', label: '⚙️ Utilidades', icon: '⚙️' },
    ];

    const filteredList = selectedCategory === 'all' 
        ? iaList 
        : iaList.filter(ia => ia.category === selectedCategory);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Listado de IA Herramientas</h1>
            
            {/* Filtros */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Filtrar por categoría:</h2>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                selectedCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Contador de resultados */}
            <div className="mb-4 text-gray-600">
                Mostrando {filteredList.length} de {iaList.length} herramientas
            </div>

            {/* Grid de tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredList.map((ia, index) => (
                    <Card
                        key={index}
                        title={ia.name}
                        description={ia.description}
                        href={ia.link}
                    />
                ))}
            </div>

            {filteredList.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No hay herramientas en esta categoría aún.
                </div>
            )}
        </div>
    );
};

export default IAList;