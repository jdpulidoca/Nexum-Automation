<div align="center">

# ⚙️ Nexum Automation

### Propuesta de automatización para una planta multiproducto de bebidas

`Industria 4.0` · `Gemelo digital` · `Robótica` · `PLC` · `SCADA`

Proyecto integrador de **Automatización de Procesos de Manufactura — APM 2026-I**

**Universidad Nacional de Colombia**  
Facultad de Ingeniería · Departamento de Ingeniería Mecánica y Mecatrónica · Sede Bogotá

[🌐 Explorar sitio interactivo](https://jdpulidoca.github.io/Nexum-Automation/)

</div>

---

## 📌 Descripción

**Nexum Automation** es una consultora académica conformada por seis estudiantes de ingeniería. El proyecto diagnostica y propone soluciones de automatización para tres líneas de producción de una planta embotelladora de Coca-Cola FEMSA.

| Línea | Producto | Formato | Enfoque |
|---|---|---:|---|
| 🔋 Monster | Monster Energy | Lata de 473 ml | Reducción de microparos y enfoque *filler-centric*. |
| 🥤 Quatro | Gaseosa Quatro | PET de 2 L | **Línea seleccionada:** automatización y paletizado robotizado. |
| 💧 Brisa | Agua Brisa | Garrafón de 20 L | Rediseño del layout y automatización del manejo de cargas. |

La línea **Quatro** fue seleccionada como la alternativa más viable y constituye la base del gemelo digital, la celda robotizada y la evaluación económica desarrollada.

### 🧱 Alcance ISA-95

El proyecto implementa la integración vertical desde el **Nivel 0 (Campo)** hasta el **Nivel 2 (SCADA)**:

- 📡 **Nivel 0:** sensores y actuadores del entorno simulado.
- 🎛️ **Nivel 1:** control mediante PLC y lógica Ladder.
- 🖥️ **Nivel 2:** supervisión, alarmas e indicadores.

Los niveles **MES** y **ERP** se presentan como referencia conceptual, pero no fueron implementados ni simulados.

---

## 🧩 Módulos del proyecto

El sitio funciona como un **hub interactivo**: cada nodo abre su contenido en un panel dinámico, sin navegar hacia páginas independientes.

| Módulo | Contenido |
|---|---|
| **1 — 🏭 Automatización e Industria 4.0** | Arquitectura ISA-95, alcance, propuestas por línea, comunicaciones, KPIs, sensórica y actuadores. |
| **2 — 📊 Gestión de la Producción** | Layout, VSM, DOP, DAP y diagramas Spaghetti para Monster, Quatro y Brisa. |
| **3 — 💰 Evaluación de Proyectos** | Canvas, EDP, EDT, cronograma, CAPEX/OPEX, flujo de caja y viabilidad financiera. |
| **4 — 🤖 Celda Robotizada** | Visor 3D, robot ABB IRB460-110/2.40, diseño del gripper, seguridad y justificación económica. |
| **5 — 🧊 Gemelo Digital** | Modelos 3D y videos de la línea completa y de sus cinco estaciones. |
| **6 — 🎛️ Controladores Industriales** | GRAFCET por niveles, lógica Ladder en Logix Emulate y demostraciones de funcionamiento. |
| **7 — 🖥️ Sistema SCADA** | Demo de supervisión, estados, alarmas ISA-18.2, eventos, históricos y KPI simulados. |
| **🔬 Simulación** | Modelos de Tecnomatix Plant Simulation con layouts, videos y archivos editables por línea. |

El proyecto también incluye las secciones **Equipo consultor**, **Reflexiones académicas** y **Bibliografía**.

---

## 🛠️ Tecnologías utilizadas

| Área | Tecnologías |
|---|---|
| 🌐 Sitio web | HTML, CSS y JavaScript |
| 🎛️ Control industrial | Studio 5000 y Logix Emulate |
| 🖥️ Supervisión | Node-RED y demo SCADA interactiva |
| 🤖 Robótica | ABB RobotStudio |
| 🧊 Gemelo digital | Siemens NX / MCD |
| 🏭 Simulación productiva | Tecnomatix Plant Simulation v23 |
| 🎨 Modelos interactivos | Onshape → glTF/GLB → `model-viewer` |
| 🔗 Comunicaciones | OPC UA, OPC DA y EtherNet/IP |

---

## 👥 Equipo Nexum Automation

| Integrante | Rol |
|---|---|
| Ariadna Contreras Nossa | Gerente ejecutiva |
| Johan Camilo Patiño Mogollón | Gerente de proyectos y relaciones |
| Esteban Durán Jiménez | Líder de diseño |
| Juliana Góngora Rasmussen | Gerente financiera |
| Oscar Jhondairo Siabato León | Líder de diseño |
| Julián David Pulido Castañeda | Gerente de automatización |

---

## 📁 Estructura del repositorio

```text
Nexum-Automation/
├── index.html              # Entrada al hub interactivo
├── assets/
│   ├── css/                # Estilos del sitio
│   ├── img/                # Imágenes e iconos
│   └── js/                 # Lógica e interacciones
├── content/
│   ├── modulo1.html ... modulo7.html
│   ├── simulacion.html
│   ├── equipo.html
│   ├── propuesta.html
│   ├── contexto.html
│   └── reflexiones.html
├── docs/
│   └── modulo1/ ... modulo7/
├── simulacion/
│   ├── Monster/
│   ├── Quatro/
│   └── Brissa/
├── ViejaPagina/            # Versión anterior del sitio
└── README.md
```

---

<div align="center">

### 🎓 Proyecto académico · Semestre 2026-I

**Nexum Automation — Ingeniería, automatización y decisiones basadas en datos**

</div>
