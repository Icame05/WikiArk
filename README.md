# 🧭 WikiArk

WikiArk es una enciclopedia web interactiva dedicada al videojuego **ARK: Survival Evolved**.  
Permite explorar información detallada sobre criaturas, objetos y guías del juego en una interfaz moderna desarrollada con React.

---

## 🚀 Tecnologías utilizadas

### Frontend
- React
- React Router DOM
- CSS personalizado

### Backend
- Node.js
- Express
- MongoDB + Mongoose

### Otros
- Docker (opcional según entorno)
- API REST propia

---

## 📌 Funcionalidades principales

### 🦖 Criaturas
- Listado completo de criaturas del juego
- Filtros por:
  - Tipo (carnívoro, herbívoro, etc.)
  - Rareza
  - Mapa
- Buscador por nombre o descripción
- Página de detalle con información completa

---

### 📦 Objetos
- Catálogo de objetos del juego
- Filtros por tipo (armas, recursos, consumibles, herramientas)
- Buscador por nombre
- Página de detalle con estadísticas y propiedades

---

### 📖 Guías
- Sistema de guías estilo wiki
- Categorías como:
  - Domesticación
  - Leveleo
  - Bosses
  - Construcción
- Página de detalle con contenido completo formateado
- Información del autor y fecha

---

### 🧩 Sistema de detalle dinámico
- Rutas dinámicas con React Router
- Acceso a contenido mediante ID en MongoDB
- Renderizado dinámico de información desde API

---

## 🎯 Objetivo del proyecto

El objetivo de WikiArk es crear una plataforma centralizada donde los jugadores de ARK puedan:

- Consultar información rápida y detallada del juego
- Aprender estrategias de supervivencia
- Acceder a guías organizadas y fáciles de entender
- Explorar criaturas y objetos de forma visual e intuitiva

---

## 🧠 Arquitectura del proyecto

Frontend (React)  
↓  
API REST (Node + Express)  
↓  
Base de datos (MongoDB)

---

## 📂 Estructura del proyecto

/frontend
├── components
├── pages
├── services
├── styles

/backend
├── models
├── routes
├── controllers
├── seed


---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/wikiark.git
```

### 2. Clonar el repositorio
```bash
cd backend
npm install
npm run dev
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Base de datos

Asegúrate de tener MongoDB en ejecución local o mediante Docker.

## 🌐 API REST
🦖 Criaturas
- GET /api/criaturas
- GET /api/criaturas/:id

📦 Objetos
- GET /api/objetos
- GET /api/objetos/:id

📖 Guías
- GET /api/guias
- GET /api/guias/:id

## 🛠️ Futuras mejoras
- 🔍 Búsqueda global unificada
- ❤️ Sistema de favoritos
- 👤 Autenticación de usuarios
- 📝 Panel de administración
- 💬 Sistema de comentarios en guías
- 🌙 Modo oscuro completo
- 📱 Mejor optimización móvil
- ⚡ Caché y optimización de API

## 📸 Capturas del proyecto

(Futuras imagenes)

## 👨‍💻 Autor

Proyecto desarrollado por Iván Calatayud Merino
Como práctica de desarrollo full stack con React y Node.js.

# ⚠️ Aviso legal

WikiArk no está afiliado con Studio Wildcard.
ARK: Survival Evolved es una marca registrada de sus respectivos propietarios.
