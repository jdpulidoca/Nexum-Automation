# 📁 docs/modulo5/

Assets 3D y de video del **Módulo 5 — Gemelo Digital** (`content/modulo5.html`), panel del hub [Nexum Automation](https://jdpulidoca.github.io/Nexum-Automation).

El panel usa un mini-hub vertical (Línea Principal + las 5 estaciones de la línea Quatro); cada nodo muestra un video de funcionamiento en YouTube y un visor 3D (`<model-viewer>`) con el modelo del gemelo digital correspondiente.

## 🗂️ Subcarpetas

| Carpeta | Contenido |
|---|---|
| `ModelosPagina/` | Modelos `.glb` **usados directamente** por el sitio — los que carga `<model-viewer>` en cada nodo (detalle abajo). |
| `Maquinas Definitivas/` | Por el nombre y el último commit ("Carga mod 3D"), parece contener los modelos 3D definitivos por máquina — probablemente el origen de las exportaciones que terminan en `ModelosPagina/`. *(No confirmado — dime qué formato/contenido tiene si quieres que lo detalle mejor.)* |
| `NX Definitivo/` | Por el nombre, parece corresponder al proyecto de **Siemens NX/MCD** con el gemelo digital de las estaciones. *(No confirmado — mismo caso que arriba.)* |

### 📂 `ModelosPagina/` — modelos usados en el sitio

| Archivo | Nodo / Estación | Video de referencia |
|---|---|---|
| `Ensamble.glb` | 🏭 Línea Principal | embed `8F76DjTWGtA` |
| `Sopladora.glb` | ⚙️ Formadora | embed `GZU2WQnHZRs` |
| `Lavado.glb` | 💦 Lavadora | embed `NxyuPooj0g0` |
| `Llenado.glb` | 🍾 Llenadora y Tapadora | embed `u3Z8didx3zI` |
| `Rjct.glb` | 🚫 Rechazadora | embed `djUwB_uDv2o` |
| `APMPack.glb` | 📦 Empaquetadora | embed `glBmM6r72o4` |

## 🔗 Referenciado desde

- `content/modulo5.html` — cada `<model-viewer src="docs/modulo5/ModelosPagina/...">` carga uno de los archivos de la tabla anterior; el visor usa `model-viewer` 3.5.0 (cargado desde CDN solo si no está ya registrado en la página).