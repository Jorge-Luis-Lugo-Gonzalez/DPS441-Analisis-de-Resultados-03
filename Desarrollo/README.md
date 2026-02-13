# Guía 3 – Simulación de Tienda (React)

Este proyecto consiste en una aplicación en React que simula una tienda en línea mostrando una lista de productos.

La aplicación utiliza:

- Componentes funcionales
- Props
- useState
- Renderización de listas con map()

## Estructura

- **ProductItem.jsx**  
  Componente sin estado que recibe por props:
  - productId
  - productName
  - price
  - imageUrl

- **ProductList.jsx**  
  Componente con estado que almacena un arreglo de 10 productos y los renderiza utilizando map().

- **App.jsx**  
  Componente principal que muestra la lista de productos.

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
    git clone https://github.com/Jorge-Luis-Lugo-Gonzalez/DPS441-Analisis-de-Resultados-03


2. Entrar a la carpeta del proyecto:
    cd Desarrollo


3. Instalar dependencias:
    npm install


4. Ejecutar el servidor:
    npm run dev


Abrir en el navegador y colocar el localhost
- Ejemplo http://localhost:5173

## Tecnologías usadas

- React
- JavaScript
- Vite






