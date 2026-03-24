# Automatización de Procesos de Manufactura - UNAL 2026-I

Este repositorio contiene el desarrollo integral de un sistema de automatización y gestión de producción para una planta embotelladora, realizado como proyecto principal de la asignatura **Automatización de Procesos de Manufactura** en la Universidad Nacional de Colombia.

## 📌 Descripción del Proyecto

El proyecto se centra en la optimización y planificación de la automatización de tres líneas de producción críticas:
1.  **Monster Energy (Lata):** Análisis de eficiencia y flujo de materiales.
2.  **Gaseosa Quatro 1.5 L (PET):** Modelado de procesos y tiempos.
3.  **Garrafones de 20 L:** Gestión de producción a gran escala.

A través de dos fases documentadas (Módulos), el equipo ha diagnosticado el estado actual de la planta mediante indicadores de desempeño (**OEE**, **VSM**) y ha proyectado una solución de automatización que integra lógica de control en **PLC**, instrumentación industrial y supervisión **SCADA**.

## 🛠️ Tecnologías y Metodologías Utilizadas

* **Gestión de Producción:** Value Stream Mapping (VSM), Diagramas de Operaciones de Proceso (DOP), Diagramas de Análisis de Proceso (DAP).
* **Indicadores de Desempeño:** Cálculo de OEE (Disponibilidad, Rendimiento, Calidad).
* **Gestión de Proyectos:** Estructura de Desglose de Trabajo (EDT/WBS) y Cronogramas de implementación.
* **Automatización Industrial:** Selección de sensores/actuadores, lógica de control en PLC y sistemas de supervisión.

## 📂 Organización del Repositorio

La estructura del repositorio está organizada siguiendo las fases de entrega del proyecto:

```text
├── 📁 Modulo_1_Analisis_Procesos/     # Diagnóstico y modelado del estado actual
│   ├── Documento_Modulo_1.pdf         # Informe detallado (VSM, OEE, Layouts)
│   └── 📁 Diagramas/                  # DOP, DAP y flujos de materiales
│
├── 📁 Modulo_2_Planeacion/            # Diseño de la solución técnica
│   ├── Documento_Modulo_2.pdf         # EDT, selección de hardware y presupuesto
│   └── 📁 Planificacion/              # Cronograma y fases de ejecución
│
├── 📁 Desarrollo_Tecnico/             # Espacio para scripts y lógica de control
│   └── 📁 PLC_Logic/                  # Borradores de diagramas de contactos/Ladder
│
├── 📁 Assets/                         # Imágenes, esquemas y recursos visuales
└── README.md                          # Guía principal del proyecto
