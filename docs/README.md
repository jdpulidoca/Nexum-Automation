# docs/

Evidencia técnica del proyecto **Nexum Automation**, organizada por módulo. Cada subcarpeta contiene los archivos (PDFs, imágenes, modelos 3D) que se cargan dinámicamente en los visores del sitio (`jdpulidoca.github.io/Nexum-Automation`).

---

## 📁 modulo1 — Propuesta e Industria 4.0

- `piramide_automatizacion.png` — gráfico de la pirámide de automatización (Nexum Automation).
- `celda_foto.png`, `empacadora_foto.png` — evidencia fotográfica de la celda y de la máquina empacadora (diseño propio).
- `maquinas/` — foto de cada una de las 5 estaciones (Sopladora, Lavadora, Llenadora, Rechazadora, Empaquetadora), usadas en Sensórica y Actuadores.
- `logos/` — logos del software de la arquitectura de comunicaciones (Node-RED, Studio 5000, ABB IoT Gateway, RSLinx, RobotStudio, Siemens NX).

## 📁 modulo2 — Gestión de Producción

- Diagramas VSM, DOP y de layout por línea (Monster, Quatro, Brisa).
- Diagramas de espagueti (Spaghetti 1-3) y talleres asociados.

## 📁 modulo3 — Evaluación de Proyectos

- Modelo Canvas, EDP/EDT del proyecto.
- Documentos de propuesta de valor y propuesta comercial (`.docx` / `.pdf`) de la automatización de la línea Quatro 2L.
- Evaluación económica descargable.

## 📁 modulo4 — Celda de Manufactura Robotizada

- `Informe_Celda_Robotizada.pdf` — diseño de la celda, del gripper, secuencia de funcionamiento y análisis de riesgos (ISO 14121-1, ISO 12100, ISO 10218-2, entre otras).
- `Archivos/Robot_APM.glb` — modelo 3D de la celda (robot ABB IRB460-110/2.40), exportado desde RobotStudio para el visor `<model-viewer>`.

## 📁 modulo5 — Digital Twin

- Modelos `.glb` de la línea completa y de cada estación (Sopladora, Lavadora, Llenadora y Tapadora, Rechazadora, Empaquetadora), exportados desde OnShape/NX vía glTF.

## 📁 modulo6 — Controladores Industriales

- Grafcet en PDF por máquina (Nivel 1, Nivel 2, y Nivel 3 solo para Llenadora y Tapadora).
- `Ladder/` — código Ladder implementado en Logix Emulate:
  - Formadora, Rechazadora, Empaquetadora: un único PDF por máquina.
  - **Lavadora** y **Llenadora y Tapadora**: varias rutinas en PDF independientes (Main, Mando/Reinicio, Detección de Flancos, Transiciones, Etapas, Contadores/Carrusel, Salidas), seleccionables desde un menú desplegable en el visor.

## 📁 modulo7 — Sistema SCADA

Contendrá la evidencia del SCADA desarrollado en **Node-RED**: exportación de flows, capturas de las pantallas de supervisión y control, y el material de la demo interactiva (arquitectura, motor de alarmas, historiador) que se está integrando al panel del módulo.

---

*Todas las rutas están referenciadas de forma relativa a la raíz del repositorio (`docs/moduloX/...`), ya que los fragmentos de `content/` se inyectan en `index.html`.*
