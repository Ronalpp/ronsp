# Backend API - Vercel Deployment

Este es un backend API construido con Express.js y PostgreSQL, optimizado para despliegue en Vercel.

## Características

- API REST con Express.js
- Base de datos PostgreSQL
- Configuración optimizada para serverless
- Validación de datos mejorada
- Manejo de errores robusto

## Endpoints

- `POST /send` - Enviar un nuevo mensaje
- `GET /get` - Obtener todos los mensajes
- `DELETE /delete/:id` - Eliminar un mensaje por ID
- `GET /` - Health check

## Despliegue en Vercel

### 1. Configurar variables de entorno

En tu dashboard de Vercel, configura las siguientes variables:

```
DATABASE_URL=tu_conexion_postgresql
CORS_ORIGIN=https://tu-frontend.vercel.app
NODE_ENV=production
```

### 2. Desplegar

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### 3. Desarrollo local

```bash
# Instalar dependencias
npm install

# Crear archivo .env con tus variables
cp .env.example .env

# Ejecutar en desarrollo
npm run dev
```

## Estructura de la base de datos

```sql
CREATE TABLE mensages (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  msg TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Cambios realizados para Vercel

1. ✅ Configuración `vercel.json` creada
2. ✅ Variables de entorno implementadas
3. ✅ Exportación de la app para serverless
4. ✅ Optimización de conexión a base de datos
5. ✅ CORS configurado para producción
6. ✅ Validación y manejo de errores mejorado
7. ✅ Scripts de package.json actualizados