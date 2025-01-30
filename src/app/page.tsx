import Card from '@/components/Card';

export default function Home() {
  const tools = [
    {
      title: 'Generador de Contraseñas',
      description: 'Genera contraseñas seguras y frases fáciles de recordar.',
      href: '/password-generator',
    },
    {
      title: 'Asistente de Regex',
      description: 'Construye y prueba expresiones regulares de manera interactiva.',
      href: '/regex-helper',
    },
    {
      title: 'Atajos de Windows',
      description: 'Consulta los atajos de teclado más útiles para Windows.',
      href: '/windows-shortcuts',
    },
    // Añade más herramientas aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Herramientas Informáticas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Card
            key={index}
            title={tool.title}
            description={tool.description}
            href={tool.href}
          />
        ))}
      </div>
    </div>
  );
};
