<div align="center">

# 📁 Módulo 1 — Automatización e Industria 4.0

**Marco tecnológico y arquitectura del gemelo digital de Nexum Automation**

`ISA-95` · `Gemelo digital` · `Campo → PLC → SCADA`

[🌐 Ver proyecto](https://jdpulidoca.github.io/Nexum-Automation)

</div>

---

## 🎯 Descripción

Este directorio contiene los recursos gráficos del **Módulo 1**, donde se define el alcance ISA-95, se comparan las líneas de producción y se presenta la arquitectura, sensórica y simulación del gemelo digital.

La solución es escalable a las tres líneas, pero su desarrollo se concentra en **Quatro PET 2 L**, seleccionada como base de la celda robotizada.

## 🧱 Alcance ISA-95

| Nivel | Función | Estado |
|---|---|---|
| 🖥️ Nivel 2 | SCADA y supervisión con Node-RED | ✅ Implementado |
| 🎛️ Nivel 1 | Studio 5000 y Logix Emulate | ✅ Implementado |
| 📡 Nivel 0 | Sensores y actuadores simulados en NX | ✅ Implementado |
| 🗃️ Niveles 3 y 4 | MES y ERP | 📘 Referencia conceptual |

## 🖼️ Contenido

| Recurso | Descripción |
|---|---|
| `piramide_automatizacion.jpeg` | Pirámide ISA-95 y alcance Campo–SCADA. |
| `celda_foto.jpeg` | Evidencia de la celda robotizada diseñada por el equipo. |
| `arquitectura-diagrama-claro.jpeg` | Arquitectura de comunicaciones para tema claro. |
| `arquitectura-diagrama-oscuro.jpeg` | Versión del diagrama para tema oscuro. |
| `maquinas/` | Imágenes de las cinco estaciones de la línea Quatro. |

### ⚙️ Estaciones documentadas

`Sopladora` · `Lavadora` · `Llenadora y Tapadora` · `Rechazadora` · `Empaquetadora`

La sección de sensórica detalla para cada estación sus **señales de animación, actuadores, sensores y secuencia de funcionamiento**.

## 🧩 Secciones del módulo

1. 🏛️ **ISA-95 y alcance**
2. 🎯 **Propuestas para Monster, Quatro y Garrafón**
3. 🔗 **Arquitectura de comunicaciones**
4. 🤖 **Gemelo digital y KPIs**
5. ⚙️ **Sensórica y actuadores**
6. ✅ **Conclusiones**

La arquitectura integra **Siemens NX/MCD, ABB RobotStudio, Studio 5000, Logix Emulate, RSLinx y Node-RED** mediante OPC DA, OPC UA y EtherNet/IP.

> 🔗 Los recursos son utilizados por `content/modulo1.html` mediante rutas `docs/modulo1/...`.
