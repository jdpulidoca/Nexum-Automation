# Nexum Automation

**Propuesta de Automatización de Procesos de Manufactura para una planta multiproducto de Coca-Cola FEMSA**

Proyecto integrador de la asignatura *Automatización de Procesos de Manufactura* (APM 2026-1), Universidad Nacional de Colombia — Facultad de Ingeniería Mecánica y Mecatrónica, Sede Bogotá.

🔗 **Sitio interactivo:** [jdpulidoca.github.io/Nexum-Automation](https://jdpulidoca.github.io/Nexum-Automation/)

---

## 📌 Descripción del proyecto

**Nexum Automation** es una consultora académica conformada por seis estudiantes de ingeniería, creada para diagnosticar y proponer la automatización de tres líneas de producción de una planta embotelladora de Coca-Cola FEMSA:

| Línea | Producto | Formato | Enfoque |
|---|---|---|---|
| 🔋 Monster | Monster Energy | Lata 473 ml | Reducción de microparos, enfoque *filler-centric* |
| 🥤 Quatro | Gaseosa Quatro | PET 2 L | **Línea seleccionada** — paletizado robotizado de fin de línea |
| 💧 Brisa | Agua Brisa | Garrafón 20 L | Rediseño de layout, automatización de paletizado |

De las tres, **Quatro** se identificó como la propuesta más viable y es sobre la que se desarrollaron a fondo el gemelo digital y la celda robotizada.

### Alcance real

El proyecto cubre integración vertical desde el **Nivel 0 (Campo)** hasta el **Nivel 2 (SCADA)** de la pirámide de automatización. Los niveles MES y ERP quedan documentados como marco conceptual, pero no fueron implementados ni simulados en esta entrega.

---

## 🧩 Módulos del proyecto

El sitio es un **hub interactivo** (constelación de nodos animados) donde cada módulo se abre como un panel dinámico — no hay navegación a páginas separadas.

| Módulo | Contenido |
|---|---|
| **1 — Propuesta e Industria 4.0** | Arquitectura ISA-95 y alcance, propuesta por línea, arquitectura de comunicaciones (Node-RED/SCADA, Studio 5000, ABB IoT Gateway, RSLinx, RobotStudio, Siemens NX), gemelo digital y KPIs, sensórica y actuadores por máquina |
| **2 — Gestión de Producción** | VSM, DOP, layout de planta y diagramas de análisis por línea |
| **3 — Evaluación de Proyectos** | Modelo Canvas, EDP/EDT, cronograma y análisis financiero (CAPEX, flujo de caja) |
| **4 — Celda de Manufactura Robotizada** | Video explicativo, visor 3D de la celda (robot ABB IRB460-110/2.40), justificación económica (ROI, OEE) e informe técnico (diseño, gripper, análisis de riesgos ISO) |
| **5 — Digital Twin** | Gemelo digital 3D de la línea completa y de cada estación (Sopladora, Lavadora, Llenadora y Tapadora, Rechazadora, Empaquetadora), con video de funcionamiento por máquina |
| **6 — Controladores Industriales** | Grafcet (Niveles 1 y 2, y Nivel 3 para Llenadora), código Ladder en Logix Emulate y video de cada máquina en funcionamiento |
| **7 — Sistema SCADA** | Supervisión y control desarrollado en Node-RED |
| **Simulación** | Modelos de Tecnomatix Plant Simulation por línea, con layout, video y archivo descargable |

Además: **Equipo Consultor**, **Reflexiones Académicas** (grupales e individuales) y **Bibliografía** organizada por sector.

---

## 👥 Equipo Nexum Automation

| Integrante | Rol |
|---|---|
| Ariadna Contreras Nossa | Gerente Ejecutiva |
| Johan Camilo Patiño Mogollón | Gerente de Proyectos y Relaciones |
| Esteban Durán Jiménez | Líder de Diseño |
| Juliana Góngora Rasmussen | Gerente Financiero |
| Oscar Jhondairo Siabato León | Líder de Diseño |
| Julián David Pulido Castañeda | Gerente de Automatización |

---

## 🛠️ Stack tecnológico

- **Sitio web:** HTML / CSS / JavaScript vanilla — hub tipo constelación con física de proximidad al mouse
- **Control (PLC):** Studio 5000 + Logix Emulate
- **Supervisión (SCADA):** Node-RED
- **Robótica:** ABB RobotStudio (celda robotizada)
- **Gemelo digital de línea:** Siemens NX / MCD
- **Simulación de producción:** Tecnomatix Plant Simulation v23
- **Modelos 3D interactivos:** OnShape → glTF/GLB → `<model-viewer>`
- **Comunicaciones industriales:** OPC UA (ABB IoT Gateway) y OPC DA / EtherNet-IP (RSLinx Classic)

---

## 📁 Estructura del repositorio

```
Nexum-Automation/
├── index.html          # Punto de entrada — el hub interactivo
├── assets/              # Imágenes, íconos, CSS y JS del sitio
│   ├── css/
│   ├── img/
│   └── js/
├── content/             # Fragmentos HTML que se cargan dinámicamente en los paneles del hub
│   ├── modulo1.html … modulo7.html
│   ├── equipo.html, propuesta.html, contexto.html, simulacion.html, reflexiones.html
│   └── bib1.html, bib2.html, bib3.html, bib-general.html
├── docs/                # Evidencia técnica por módulo (PDFs de Grafcet, informes, diagramas)
│   ├── modulo1/ … modulo6/
├── simulacion/          # Modelos, layouts y videos de Tecnomatix Plant Simulation por línea
│   ├── Monster/, Quatro/, Brissa/
├── ViejaPagina/         # Versión anterior del sitio (páginas HTML separadas) — reemplazada por el hub
└── README.md
```

---

Universidad Nacional de Colombia — Facultad de Ingeniería Mecánica y Mecatrónica, Sede Bogotá · Semestre 2026-I
