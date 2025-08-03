# Tarjeta Online Álvaro Vera - Desarrollo Local

## 🚀 Instalación y Configuración Local

### Requisitos Previos
- **Node.js** (versión 18 o superior)
- **pnpm** (recomendado) o **npm**

### Pasos para Instalar

1. **Extraer el proyecto**
   ```bash
   unzip alvaro-vera-card.zip
   cd alvaro-vera-card
   ```

2. **Instalar dependencias**
   ```bash
   # Con pnpm (recomendado)
   pnpm install
   
   # O con npm
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   # Con pnpm
   pnpm dev
   
   # O con npm
   npm run dev
   ```

4. **Abrir en el navegador**
   - La aplicación estará disponible en: `http://localhost:5173`

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo
pnpm build        # Construye para producción
pnpm preview      # Vista previa de la build de producción
pnpm lint         # Ejecuta el linter

# Con npm
npm run dev
npm run build
npm run preview
npm run lint
```

## 📁 Estructura del Proyecto

```
alvaro-vera-card/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx       # Header con nombre y QR
│   │   ├── HeroSection.tsx  # Sección principal
│   │   ├── AboutSection.tsx # Sección "Sobre mí"
│   │   ├── ExperienceSection.tsx # Experiencia profesional
│   │   ├── ContactSection.tsx    # Información de contacto
│   │   └── QRModal.tsx      # Modal del código QR
│   ├── hooks/               # Hooks personalizados
│   ├── lib/                 # Utilidades
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Assets públicos
│   ├── profile.jpg         # Imagen de perfil
│   └── qr-code.png        # Código QR
├── dist/                   # Build de producción
└── package.json           # Dependencias y scripts
```

## 🎨 Tecnologías Utilizadas

- **React 18** + **TypeScript**
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **GSAP** - Animaciones y efectos
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos

## 🔧 Personalización

### Cambiar Contenido
- **Información personal**: Edita los datos en cada componente de `src/components/`
- **Colores**: Modifica el archivo `tailwind.config.js`
- **Imágenes**: Reemplaza los archivos en `public/`

### Modificar Estilos
- **Colores principales**: Configurados en `tailwind.config.js`
- **Estilos globales**: `src/index.css`
- **Estilos por componente**: Cada archivo `.tsx`

### Añadir Efectos GSAP
```typescript
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const MiComponente = () => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(elementRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);
  
  return <div ref={elementRef}>Mi contenido</div>;
};
```

## 🌐 Despliegue

### Construcción para Producción
```bash
pnpm build
```

### Opciones de Despliegue
- **Vercel**: `vercel --prod`
- **Netlify**: Subir la carpeta `dist/`
- **GitHub Pages**: Configurar GitHub Actions
- **Servidor propio**: Servir los archivos de `dist/`

## 📞 Información de Contacto Original

- **URL Actual**: https://9cuh5l7zcesm.space.minimax.io
- **Desarrollado para**: Álvaro Javier Vera Alvarado
- **Email**: alvarojaviervera@gmail.com
- **Ubicación**: Santa Fe, Argentina

## 🐛 Solución de Problemas

### Error de dependencias
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Puerto en uso
```bash
pnpm dev --port 3000
```

### Problemas con GSAP
- Verifica que GSAP esté instalado: `pnpm add gsap`
- Importa correctamente: `import { gsap } from 'gsap';`

---

**¡Tu tarjeta online está lista para personalizar y desplegar!** 🎉
