<div align="center">

# 🧊 Módulo 5 — Gemelo Digital

**Visualización interactiva de la línea Quatro y sus estaciones**

`Siemens NX/MCD` · `Modelos GLB` · `Videos operativos`

[🌐 Ver proyecto](https://jdpulidoca.github.io/Nexum-Automation)

</div>

---

## 🎯 Descripción

Este directorio contiene los modelos 3D y recursos del **gemelo digital de la línea Quatro**.

El panel permite seleccionar la línea completa o una de sus cinco estaciones. Cada sección combina un **video de funcionamiento** con un modelo 3D interactivo que puede rotarse y ampliarse.

## 🏭 Modelos publicados

| Nodo | Modelo 3D | Video |
|---|---|---|
| 🏭 Línea principal | `Ensamble.glb` | [▶ Ver](https://www.youtube.com/watch?v=8F76DjTWGtA) |
| ⚙️ Formadora | `Sopladora.glb` | [▶ Ver](https://www.youtube.com/watch?v=GZU2WQnHZRs) |
| 💦 Lavadora | `Lavado.glb` | [▶ Ver](https://www.youtube.com/watch?v=NxyuPooj0g0) |
| 🍾 Llenadora y Tapadora | `Llenado.glb` | [▶ Ver](https://www.youtube.com/watch?v=u3Z8didx3zI) |
| 🚫 Rechazadora | `Rjct.glb` | [▶ Ver](https://www.youtube.com/watch?v=djUwB_uDv2o) |
| 📦 Empaquetadora | `APMPack.glb` | [▶ Ver](https://www.youtube.com/watch?v=glBmM6r72o4) |

## 📂 Estructura

```text
modulo5/
├── ModelosPagina/          → modelos GLB cargados por el sitio
├── Maquinas Definitivas/   → recursos fuente conservados por estación
├── NX Definitivo/          → archivos de trabajo del gemelo digital
└── Readme.md
```

> 📌 Solo los archivos de `ModelosPagina/` son referenciados directamente por `content/modulo5.html`.

## 🔧 Integración web

Los modelos se visualizan mediante **`model-viewer` 3.5.0**, con rotación automática, control de cámara, iluminación y entorno neutro.

Las rutas siguen el formato:

```text
docs/modulo5/ModelosPagina/[modelo].glb
```
