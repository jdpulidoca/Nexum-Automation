<div align="center">

# 🎛️ Módulo 6 — Controladores Industriales

**Diseño e implementación del control secuencial de la línea**

`GRAFCET` · `Lógica Ladder` · `Logix Emulate`

</div>

---

## 🎯 Objetivo

Documentar la secuencia general de la línea y desarrollar el control de cada estación, desde la especificación funcional hasta su implementación en **Ladder**.

## 🏭 Estaciones desarrolladas

| Estación | GRAFCET | Implementación |
|---|---|---|
| 🌀 Formadora / Sopladora | Niveles 1 y 2 | Ladder |
| 💦 Lavadora | Niveles 1 y 2 | Ladder por rutinas |
| 🍾 Llenadora y Tapadora | Niveles 1, 2 y 3 | Ladder por rutinas |
| 🚫 Rechazadora | Niveles 1 y 2 | Ladder |
| 📦 Empaquetadora | Niveles 1 y 2 | Ladder |

## 🧩 Niveles GRAFCET

- 📋 **Nivel 1 — Funcional:** secuencia y comportamiento esperado.
- ⚙️ **Nivel 2 — Tecnológico:** actuadores, sensores y preactuadores.
- 🔌 **Nivel 3 — Operativo:** direccionamiento físico de entradas y salidas.

## 📂 Contenido

```text
modulo6/
├── Grafcet/
│   ├── General.pdf        → secuencia global de las 5 estaciones
│   └── [Máquina]/         → diagramas por nivel
└── Ladder/
    └── [Máquina]/         → programas y rutinas implementadas
```

> 🎥 La página del proyecto complementa la documentación con videos de cada máquina ejecutando su lógica en Logix Emulate.
