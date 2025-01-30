import Link from 'next/link';

export default function Home() {
  const tools = [
    { name: 'Generador de Contraseñas', path: '/password-generator' },
    { name: 'Ayudante de Regex', path: '/regex-helper' },
    { name: 'Atajos de Windows', path: '/windows-shortcuts' },
    // Añade más herramientas aquí
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Herramientas Disponibles</h2>
      <ul className="list-disc list-inside">
        {tools.map((tool) => (
          <li key={tool.path}>
            <Link href={tool.path} className="text-blue-500 hover:underline">
              {tool.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}