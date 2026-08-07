# 🌦️ Dashboard Meteorológico - Supabase

Dashboard web en tiempo real para el monitoreo de datos de una estación meteorológica, construido con **React + Vite** y **Supabase** como backend.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)

## 📋 Descripción

Este proyecto consume datos de sensores (temperatura, presión atmosférica y humedad) almacenados en una base de datos de **Supabase** y los presenta en un panel visual con las lecturas actuales y un historial de las mediciones más recientes.

## 🖥️ Vista previa

El dashboard muestra:

- Tarjetas con los valores **actuales** de Temperatura, Presión y Humedad.
- Una tabla de **Historial de Datos** con fecha/hora y cada una de las tres métricas.

| Temperatura | Presión | Humedad |
|:---:|:---:|:---:|
| °C | hPa | % |

## ✨ Características

- 📡 Consulta de datos en tiempo real desde Supabase.
- 📊 Tarjetas resumen con las últimas lecturas.
- 🕒 Historial cronológico de mediciones.
- ⚡ Construido con Vite para un desarrollo rápido y un build optimizado.
- 🎨 Interfaz oscura, limpia y responsiva.

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/) (base de datos y API)
- CSS puro
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) para linting

## 📁 Estructura del proyecto

```
DASHBOARD_SUPABASE/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   └── supabase.js          # Cliente y configuración de Supabase
│   ├── components/
│   │   └── WheatherCards.jsx    # Tarjetas de Temperatura, Presión y Humedad
│   ├── pages/
│   │   └── Dashboard.jsx        # Página principal del dashboard
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env                          # Variables de entorno (no versionado)
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/dashboard_supabase.git
   cd dashboard_supabase
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Supabase:
   ```env
   VITE_SUPABASE_URL=tu_url_de_supabase
   VITE_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con Vite |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run lint` | Ejecuta oxlint sobre el código fuente |

## 🗄️ Base de datos (Supabase)

El proyecto espera una tabla en Supabase con al menos las siguientes columnas:

| Columna | Tipo | Descripción |
|---|---|---|
| `created_at` | timestamp | Fecha y hora de la lectura |
| `temperatura` | float | Temperatura en °C |
| `presion` | float | Presión atmosférica en hPa |
| `humedad` | float | Humedad relativa en % |

> Ajusta los nombres de columnas según tu esquema real en `src/api/supabase.js`.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar:

1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
