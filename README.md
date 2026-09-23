# Herramientas Informáticas

Un proyecto de Next.js que agrupa herramientas útiles para el día a día en informática, como generadores de contraseñas, ayudantes de regex, atajos de teclado de Windows y más.

## Herramientas disponibles

| Herramienta | Ruta | Descripción |
| --- | --- | --- |
| Generador de contraseñas | `/password-generator` | Genera contraseñas seguras y frases fáciles de recordar con opciones configurables. |
| Asistente de Regex | `/regex-helper` | Construye y prueba expresiones regulares de forma interactiva. |
| Atajos de Windows | `/windows-shortcuts` | Consulta atajos de teclado útiles para Windows. |
| Comandos de Git | `/git-commands` | Muestra comandos de Git frecuentes con su descripción. |
| Listado de IA | `/ia-list` | Reúne enlaces a herramientas de inteligencia artificial. |
| Calculadora de margen | `/price-margin` | Calcula el margen de beneficio a partir de los datos de precio y coste. |

## Tecnologías Utilizadas

- **Next.js**: Framework de React para renderizado del lado del servidor y generación estática.
- **TypeScript**: Para tipado estático y mejor mantenibilidad del código.
- **Tailwind CSS**: Para estilos rápidos y responsivos.
- **React**: Biblioteca principal para la construcción de la interfaz de usuario.

## Estructura del proyecto

```text
src/
   app/
      (tools)/
         git-commands/
         ia-list/
         password-generator/
         price-margin/
         regex-helper/
         windows-shortcuts/
      layout.tsx
      page.tsx
   components/
   hooks/
   utils/
```

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

## Ejecutar con Docker

Con Docker Desktop iniciado, ejecuta:

```bash
docker compose up --build
```

La aplicación estará disponible en http://localhost:3000. Los cambios en el código se reflejan automáticamente. Para detenerla, usa `Ctrl+C`; para eliminar el contenedor y el volumen de dependencias, ejecuta `docker compose down -v`.

