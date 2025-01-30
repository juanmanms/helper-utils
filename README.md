# Herramientas Informáticas

Un proyecto de Next.js que agrupa herramientas útiles para el día a día en informática, como generadores de contraseñas, ayudantes de regex, atajos de teclado de Windows y más.

## Herramientas Implementadas

1. **Generador de Contraseñas**:
   - Genera contraseñas seguras con opciones personalizables (longitud, mayúsculas, números, símbolos).
   - Soporta la generación de frases seguras fáciles de recordar.

2. **Ayudante de Regex** (en desarrollo):
   - Editor interactivo para construir y probar expresiones regulares.
   - Ejemplos predefinidos y explicación de cada parte del regex.

3. **Atajos de Teclado de Windows** (en desarrollo):
   - Listado de atajos útiles para Windows, organizados por categorías.
   - Buscador para encontrar atajos rápidamente.

## Próximas Herramientas/trabajos
- *Mejorar diseño y componentes
- Conversor de Unidades.
- Generador de Lorem Ipsum.
- Calculadora de Hash.
- Codificador/Decodificador.
- Generador de QR Codes.
- Cheatsheets de Comandos (Git, Docker, Linux, etc.).

## Tecnologías Utilizadas

- **Next.js**: Framework de React para renderizado del lado del servidor y generación estática.
- **TypeScript**: Para tipado estático y mejor mantenibilidad del código.
- **Tailwind CSS**: Para estilos rápidos y responsivos.
- **React**: Biblioteca principal para la construcción de la interfaz de usuario.

## Estructura del Proyecto

src/ ├── app/ │ ├── (tools)/ # Grupo de herramientas │ │ ├── password-generator/ # Generador de contraseñas │ │ ├── regex-helper/ # Ayudante de regex │ │ ├── windows-shortcuts/ # Listado de atajos de Windows │ │ └── ... # Otras herramientas │ ├── layout.tsx # Layout principal │ └── page.tsx # Página de inicio ├── components/ # Componentes reutilizables ├── hooks/ # Hooks personalizados ├── utils/ # Funciones utilitarias └── styles/ # Estilos globales

## Cómo Configurar el Proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/herramientas-informaticas.git
   cd herramientas-informaticas
Instala las dependencias:

bash
Copy
npm install
Ejecuta el servidor de desarrollo:

bash
Copy
npm run dev
Abre tu navegador en http://localhost:3000 para ver el proyecto en acción.

