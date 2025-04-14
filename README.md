# Prueba Técnica (Angular + TailwindCSS)

Esta es una web desarrollada en **Angular** que consume la API de [PokéAPI](https://pokeapi.co/), permitiendo listar Pokémons, ver sus detalles y gestionar una lista local de favoritos.

Diseñado con **TailwindCSS**.

---

## Funcionalidades

- Listado paginado de Pokémon (3 por página) con opción de cargar más
- Vista de detalle con estadísticas (HP, ataque, defensa)
- CRUD de favoritos (añadir, ver, eliminar) almacenado en `localStorage`
- Inicio de sesión con usuario quemado (solo para demo)

---

## Usuario de prueba

Puedes iniciar sesión con el siguiente usuario:

Email: test@example.com
Password: 123456

> El login es ficticio y no interactúa con un backend real.

---

## CRUD con LocalStorage

La aplicación implementa un CRUD local que guarda tus items en el navegador usando `localStorage`. Puedes:

- **Crear**
- **Leer**
- **Actualizar**
- **Eliminar**

---

## Tecnologías

- Angular
- TailwindCSS

---

## Instalación

```bash
git clone

npm install

ng serve