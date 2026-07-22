<div align="center">

# 🖥️ Módulo 7 — Sistema SCADA

**Supervisión industrial para la planta de embotellado**

`HP-HMI` · `Alarmas ISA-18.2` · `Históricos y KPI`

[🌐 Ver proyecto](https://jdpulidoca.github.io/Nexum-Automation)

</div>

---

## 🎯 Descripción

Este módulo presenta una propuesta de **supervisión centralizada** para visualizar el estado de la línea, gestionar alarmas y convertir los datos de producción en información útil para operación y mantenimiento.

Incluye una demo navegable con valores simulados que no acciona equipos físicos.

## 🧩 Secciones del panel

| Sección | Contenido |
|---|---|
| 🖥️ Demo SCADA | Vista general, detalle por máquina, alarmas, eventos y producción. |
| ⚡ Valor operativo | Respuesta rápida, trazabilidad y mejor toma de decisiones. |
| 🧰 Capacidades | Supervisión, históricos, KPI y conectividad industrial. |
| 🚀 Implementación | Levantamiento, integración, validación y despliegue. |
| 📈 Escalabilidad | Preparación para conectarse con PLC y señales reales. |

## 🏭 Equipos supervisados

`Sopladora` · `Lavadora` · `Llenadora` · `Inspección` · `Empaque`

La vista de cada equipo presenta sus **actuadores, detecciones, alarmas y estado operativo**.

## 🚨 Gestión de alarmas

La interfaz utiliza un enfoque **HP-HMI en escala de grises**, reservando el color para las prioridades de alarma definidas según criterios **ISA-18.2**.

También permite reconocer alarmas, registrar eventos y consultar tendencias de producción.

## 📂 Contenido

| Archivo | Uso en el panel |
|---|---|
| `Scada - Final.json` | ⚠️ No está referenciado por `content/modulo7.html`. |
| `Readme.md` | Documentación de la carpeta. |

## 🔎 Nota técnica

La demo está implementada directamente dentro de `content/modulo7.html`:

- No carga archivos desde `docs/modulo7/`.
- No utiliza `fetch`, WebSocket, MQTT ni solicitudes externas de datos.
- Los estados, señales, alarmas y KPI se generan localmente con JavaScript.
- El uso de `Scada - Final.json` no puede determinarse únicamente desde la página.

> 🔌 En un despliegue real, la interfaz debe integrarse con los PLC, históricos y señales reales de la planta.
