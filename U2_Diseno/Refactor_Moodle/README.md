# Moodle — Escuela Politécnica de Guadalajara

Hecho con Angular, realizando el diseño de la pantalla principal
de Moodle del Poli, aplicando retícula de tercios, espacio en
blanco generoso y un botón de llamada a la acción (CTA) con alto contraste
como lo pedía la actividad.

## Cómo ejecutarlo

Necesitas Node.js (https://nodejs.org) instalado.

```bash
npm install
npm start
```

Luego abre **http://localhost:4200** en tu navegador.

## Colores usados

| Token              | Valor     | Uso                                               |
|---------------------|-----------|----------------------------------------------------|
| `--color-canvas`     | `#E8E9EB` | Fondo general de la página                         |
| `--color-primary`    | `#2867AE` | Encabezados, enlaces, título del login, hero        |
| `--color-accent`     | `#F57247` | **Únicamente** el botón "Iniciar sesión" (el CTA)   |

El naranja se reserva solo para el CTA a propósito: al no aparecer en ningún
otro lugar de la interfaz, el botón de acción principal salta a la vista de
inmediato por contraste, en vez de competir con otros elementos naranjas.

