# Teslo Shop

Aplicación de e-commerce para productos estilo Tesla, desarrollada con React, Vite y TypeScript. Incluye autenticación, administración de productos y tienda en línea.

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC?logo=tailwind-css)
![Axios](https://img.shields.io/badge/Axios-1.13.2-5A29E4)
![ESLint](https://img.shields.io/badge/ESLint-9.39.1-4B32C3?logo=eslint)

## ✨ Características

- 🛒 **Tienda en línea** con productos categorizados por género
- 🔐 **Autenticación** de usuarios con login y registro
- 👨‍💼 **Panel de administración** para gestionar productos
- 🧠 **Búsqueda y filtros** avanzados de productos
- ⚛️ **React + TypeScript** con Vite para desarrollo rápido
- 🧪 **Testing** con React Testing Library (implícito en estructura)
- 🧹 **Calidad** con ESLint

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.2.0** - Biblioteca de UI
- **Vite 7.2.2** - Build y servidor de desarrollo
- **TypeScript 5.9.3** - Tipado estático
- **TailwindCSS 4.1.17** - Framework de estilos
- **@vitejs/plugin-react-swc** - Fast Refresh con SWC

### Estado y Datos
- **Zustand 5.0.9** - Gestión de estado
- **@tanstack/react-query 5.90.10** - Fetching y caching de datos
- **Axios 1.13.2** - Cliente HTTP
- **React Hook Form 7.69.0** - Manejo de formularios

### UI y Componentes
- **Radix UI** - Componentes primitivos (Checkbox, Label, etc.)
- **Lucide React** - Iconos
- **Sonner** - Notificaciones toast
- **React Router 7.9.5** - Enrutamiento

### Herramientas de Desarrollo
- **ESLint 9.39.1** - Linting
- **@tanstack/react-query-devtools** - DevTools para queries

## 📋 Prerrequisitos

- Node.js 18 o superior
- npm o yarn
- Un backend corriendo en el puerto 3000 (API de Teslo)

## 🛠️ Instalación

1. Clona el repositorio
   ```bash
   git clone https://github.com/tu-usuario/teslo-shop.git
   cd teslo-shop
   ```

2. Instala las dependencias
   ```bash
   npm install
   ```

3. Configura las variables de entorno
   Crea un archivo `.env` en la raíz del proyecto basado en `.env.template`:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

### Construcción para producción
```bash
npm run build
```

### Vista previa de producción
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── admin/
│   ├── actions/              # Acciones para productos (crear, actualizar)
│   ├── components/           # Componentes del panel admin (Sidebar, Header)
│   ├── hooks/                # Hooks personalizados (useProduct)
│   ├── layouts/              # Layouts del admin
│   ├── pages/                # Páginas del admin (Dashboard, Productos)
├── auth/
│   ├── actions/              # Acciones de auth (login, register)
│   ├── components/           # Componentes de auth (no específicos)
│   ├── interfaces/           # Interfaces de auth
│   ├── layouts/              # Layout de auth
│   ├── pages/                # Páginas de login/register
│   ├── store/                # Store de Zustand para auth
├── shop/
│   ├── actions/              # Acciones para productos de tienda
│   ├── components/           # Componentes de tienda (ProductCard, Grid)
│   ├── hooks/                # Hooks (useProducts)
│   ├── layouts/              # Layout de tienda
│   ├── pages/                # Páginas de tienda (Home, Gender, Product)
├── api/                      # Cliente Axios (tesloApi)
├── components/
│   ├── custom/               # Componentes personalizados (Pagination, Logo)
│   ├── routes/               # Rutas protegidas
│   ├── ui/                   # Componentes UI (Button, Card, etc.)
├── interfaces/               # Interfaces globales (Product, User)
├── lib/                      # Utilidades (utils, currency formatter)
├── mocks/                    # Datos mock
├── TesloShoApp.tsx           # App principal
├── app.router.tsx            # Configuración de rutas
├── main.tsx                  # Punto de entrada
└── index.css                 # Estilos globales
```

## 🔧 Configuración

### API Backend

1. Asegúrate de que el backend esté corriendo en `http://localhost:3000`
2. La app usa Axios para conectarse a la API de Teslo:
   ```ts
   // src/api/tesloApi.ts
   import axios from 'axios'

   const tesloApi = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
   })
   ```

### Autenticación

- Usa Zustand para manejar el estado de auth
- Incluye interceptores para tokens JWT
- Rutas protegidas con `AdminRoute` y `NotAuthenticatedRoute`

## 🧪 Testing

El proyecto está preparado para testing con React Testing Library (estructura incluida, pero no detallada en archivos proporcionados).

## 📱 Características de la Aplicación

- Navegación por categorías de productos (Hombres, Mujeres, Niños)
- Búsqueda y filtros por precio, talla, género
- Carrito de compras (botón en ProductCard)
- Panel admin para CRUD de productos
- Autenticación con roles (admin/user)

## 🔧 Scripts disponibles

- `dev`: inicia el servidor de desarrollo
- `build`: compila TypeScript y construye con Vite
- `preview`: sirve la build de producción
- `lint`: linting del proyecto

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Proyecto de DevTalles - Curso de React de Fernando Herrera**

## 🙏 Agradecimientos

- [React](https://react.dev/) por el framework
- [Vite](https://vitejs.dev/) por la herramienta de desarrollo
- [TailwindCSS](https://tailwindcss.com/) por los estilos
- [Fernando Herrera](https://fernando-herrera.com/) y [DevTalles](https://devtalles.com/) por el curso
- [Radix UI](https://www.radix-ui.com/) por los componentes primitivos
- [Zustand](https://zustand-demo.pmnd.rs/) y [TanStack Query](https://tanstack.com/query) por la gestión de estado

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor:

1. Revisa la documentación en este `README`
2. Busca en los issues del repositorio
3. Crea un nuevo issue con el detalle del problema

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella! Este es un proyecto del curso de React de Fernando Herrera en DevTalles.