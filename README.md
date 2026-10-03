# Vibras Motor — app de referidos para vender carros y motos

App (PWA) estilo Toyota de Vibras Positivas HM. El cliente escoge un modelo, toca «Lo quiero»
y le sale un WhatsApp al concesionario con un **código de referido** (ej. `VM-TOY-261003-4821`).
Si la venta se cierra con ese código, el concesionario paga la comisión pactada.

## Publicar en GitHub Pages
1. Crea el repo `haroldco45/vibras-motor` y sube TODOS los archivos de esta carpeta a la raíz.
2. Settings → Pages → Branch `main` / carpeta `/root` → Save.
3. Queda en `https://haroldco45.github.io/vibras-motor/` (Netlify se actualiza solo).

## Lo que se edita (bloque CONFIG al inicio del script de index.html)
- `marcas[...].whatsapp`: número del asesor de cada marca con 57 adelante. Vacío = el cliente le escribe a Harold.
- `comisionEjemplo`: porcentaje con que abre la calculadora (es solo un ejemplo).
- `demos`: enlaces a tus apps de modelos. Verifica que estén publicadas.
- En `MODELOS`: precio, fecha del precio, dato de ventas y `foto` (URL propia si el concesionario te da fotos oficiales).

## Fotos y videos
- Las fotos se cargan de Wikimedia Commons (licencias libres) con una sola consulta; si alguna no existe, sale una silueta.
- Videos de YouTube reales; cargan solo al tocarlos. Cada modelo tiene además «Más videos en YouTube».

## Datos (corte septiembre 2026)
Andemos y ANDI–Fenalco con datos RUNT (informes del 1 y 2 de octubre de 2026). Los precios llevan su fecha en cada tarjeta.

## Fase 2 sugerida
Backend Node/Express + SQL Server que registre cada código de referido, avise a Harold y al concesionario
automáticamente y lleve el tablero de ventas cerradas y comisiones por cobrar.

Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados.
