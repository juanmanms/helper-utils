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
    {
      title: 'Comandos de Git',
      description: 'Lista de comandos de Git para trabajar con repositorios.',
      href: '/git-commands',
    },
    {
      title: 'Listado de IA interesantes',
      description: 'Las Ias más interesantes del mundo',
      href: '/ia-list',
    },
    // {
    //   title: 'Convertidor de Bases',
    //   description: 'Convierte números entre diferentes bases numéricas.',
    //   href: '/base-converter',
    // },
    // {
    //   title: 'Calculadora de IP',
    //   description: 'Calcula subredes y direcciones IP de manera sencilla.',
    //   href: '/ip-calculator',
    // },
    // {
    //   title: 'Calculadora de Subredes',
    //   description: 'Calcula subredes y direcciones IP de manera sencilla.',
    //   href: '/subnet-calculator',
    // },
    // {
    //   title: 'Calculadora de CIDR',
    //   description: 'Calcula subredes y direcciones IP de manera sencilla.',
    //   href: '/cidr-calculator',
    // },
    // {
    //   title: 'Calculadora de VLSM',
    //   description: 'Calcula subredes y direcciones IP de manera sencilla.',
    //   href: '/vlsm-calculator',
    // },
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
