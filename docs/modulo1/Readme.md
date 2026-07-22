# 📁 docs/modulo1/

Assets de imagen del **Módulo 1 — Introducción a Automatización e Industria 4.0**, panel principal del hub [Nexum Automation](https://jdpulidoca.github.io/Nexum-Automation) (`content/modulo1.html`).

Este módulo presenta el marco conceptual del proyecto: el alcance real bajo el estándar **ISA-95**, la comparación entre las tres líneas de producción, la arquitectura de comunicaciones del gemelo digital, los KPIs de simulación y la sensórica de las cinco estaciones de la línea seleccionada.

## 🖼️ Contenido

| Archivo | Sección donde se usa | Descripción |
|---|---|---|
| `piramide_automatizacion.jpeg` | ISA-95 y Alcance | Pirámide de Automatización (Nexum Automation) — niveles 0–4 y el alcance cubierto (Campo → SCADA). |
| `celda_foto.jpeg` | ISA-95 y Alcance | Foto de la celda robotizada, diseño propio del equipo. |
| `arquitectura-diagrama-claro.jpeg` | Arquitectura de Comunicaciones | Diagrama de la arquitectura de comunicaciones del gemelo digital — versión tema claro. |
| `arquitectura-diagrama-oscuro.jpeg` | Arquitectura de Comunicaciones | Misma diagrama — versión tema oscuro. Ambas se alternan automáticamente según el modo activo del sitio. |
| `maquinas/` | Sensórica y Actuadores | Fotos individuales de las 5 estaciones de la línea Quatro (detalle abajo). |

### 📂 `maquinas/`

| Archivo | Estación |
|---|---|
| `sopladora.jpeg` | Sopladora (Formadora) — moldeo por soplado PET |
| `lavadora.jpeg` | Lavadora |
| `llenadora.jpeg` | Llenadora y Tapadora |
| `rechazadora.jpeg` | Rechazadora |
| `empaquetadora.jpeg` | Empaquetadora (diseño propio del equipo, sin referencia de catálogo comercial) |

## 🧩 Estructura del panel (6 secciones)

1. **ISA-95 y Alcance** — define el alcance real: Nivel 0 (Campo) a Nivel 2 (SCADA) implementados; Nivel 3 (MES) y Nivel 4 (ERP) quedan fuera de alcance, solo como referencia conceptual.
2. **Propuesta por Línea** — Monster (473 ml), Quatro (PET 1.5 L) y Garrafón (20 L); **Quatro** es la línea seleccionada, base del gemelo digital y la celda robotizada.
3. **Arquitectura de Comunicaciones** — pila de software en 3 niveles: Supervisión (Node-RED, Studio 5000 + Logix Emulate), Control e Integración (ABB IoT Gateway, RSLinx Classic) y Simulación/Planta Virtual (ABB RobotStudio, Siemens NX/MCD).
4. **Gemelo Digital** — simulación en Siemens NX (MCD) para evaluar cuellos de botella, inventarios (WIP), OEE (meta ≥ 75%) y microparos.
5. **Sensórica y Actuadores** — señales de Animación, Actuadores, Sensores y Lógica de funcionamiento para cada una de las 5 estaciones de la línea Quatro.
6. **Conclusión** — síntesis del alcance logrado y del gemelo digital como ecosistema de datos para la toma de decisiones.

## 🔗 Referenciado desde

- `content/modulo1.html` — todas las rutas de imagen usan `docs/modulo1/...` (rutas absolutas desde la raíz del sitio, sin `../`).
