# 📁 docs/modulo7/

Carpeta de soporte del **Módulo 7 — Sistema SCADA para Planta de Embotellado** (`content/modulo7.html`), panel del hub [Nexum Automation](https://jdpulidoca.github.io/Nexum-Automation).

Presenta la propuesta de supervisión centralizada, gestión de alarmas, históricos y análisis operativo para la línea de producción, con una demo interactiva de SCADA.

## 🧩 Estructura del panel (5 secciones)

1. **Demo SCADA** — experiencia interactiva: vista general de las 5 máquinas, detalle por máquina (actuadores/sensores/alarmas), gestión de alarmas (prioridades ISA-18.2), registro de eventos y gráfico de producción.
2. **Valor operativo** — decisiones más rápidas, menor tiempo de reacción, mejor trazabilidad, interfaz HP-HMI.
3. **Capacidades** — vista general de planta, detalle por máquina, gestión de alarmas, históricos/KPI, registro de eventos, conectividad industrial.
4. **Implementación** — 4 etapas: Levantamiento, Integración, Validación, Despliegue.
5. **Escalabilidad** — nota de que la demo es navegable/demostrable y que un despliegue real se conecta a señales de planta reales.

## 🖼️ Contenido de la carpeta

| Archivo | ¿Usado por el panel? |
|---|---|
| `Scada - Final.json` | ⚠️ **No** — no encontré ninguna referencia a `docs/modulo7/...` en `content/modulo7.html`. |

## ⚠️ Nota importante

La demo de SCADA que se ve en el panel (vista general, alarmas, eventos, gráfico) **no lee este archivo**: está totalmente autocontenida en JavaScript, con las 5 máquinas, sus señales y el estado inicial definidos como datos fijos dentro del propio `content/modulo7.html`. El diagrama de planta también es un SVG embebido directamente en el HTML (no una imagen externa).

Por eso no puedo confirmar para qué se usa `Scada - Final.json` — no está enlazado desde ningún lado del sitio. Por el nombre y el contexto del proyecto (Node-RED como SCADA/pasarela IoT mencionado en el Módulo 1), podría ser un flujo exportado de Node-RED u otro archivo de configuración SCADA real, guardado como referencia para una futura conexión a señales reales. Si me confirmas qué es, lo agrego a esta tabla con precisión.