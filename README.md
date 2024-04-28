# Prueba técnica para MCA Spain

Esta es la prueba técnica realizada por Jorge Befán para el puesto de Frontend en MCA Spain.

### Herramientas utilizadas y breve motivación:

#### Vite
Es un bundler más sencillo de poner en marcha y moderno que Webpack. Permite una fácil iteración para una prueba de este tipo con HMR y una mayor agilidad para producir el MVP que se pide.
Además, permite 
En la documentación de Vite describen sus ventajas (aunque también tiene el inconveniente de carecer de la solera y uso generalizado de Webpack): [https://vitejs.dev/guide/why]

#### Typescript
El superset de Javascript que está tomando cada vez más fuerza y con motivos.
A lo largo de la implementación, ayudará con numerosos detalles como el tipado a la hora de tratar con los datos devueltos por la API, error handling, estilos de CSS Modules y otros.

#### React
Dado que lo que se pide es una SPA con diferentes páginas y navegación en el cliente, con un manejo de estado global, diferentes componentes donde cada uno viene definido en el enunciado de la prueba, por lo que entiendo que se busca la creación de componentes reutilizables.

#### CSS Modules
Para MVP rápidos usaría TailwindCSS si de mí dependiera la decisión, pero entiendo que es algo posiblemente controversial. Por lo tanto, para escribir CSS, me inclino por CSS Modules, lo cual mantiene todas las ventajas de CSS pero sumando las ventajas que supone poder separar los estilos en componentes, que son los elementos principales de construcción en React.

#### React Router
Para implementar client side routing, he decidido usar React Router, el cual he usado en otros proyectos y permite una fácil implementación de rutas anidadas, usando componentes comunes a varias rutas como layouts y pasando params.

#### React Query
Paquete de manejo de estado asíncrono y fetching que permite manipular muy fácilmente y de forma granular los datos que trabajamos y que fetcheamos de la API del ejercicio.

#### Otros
Hay más decisiones que me encantaría discutir en la revisión si fuera oportuno para identificar posibles mejoras y puntos débiles de las implementaciones.

### Ejecutar el proyecto

Para ejecutar en entorno desarrollo, simplemente han de lanzarse 2 comandos:

- `git clone git@github.com:jorgebef/mca-spain-technical-frontend.git <path_to_project>`
- `cd <path_to_project>`
- `pnpm i`
- `pnpm run dev`
- Se lanzará en `localhost:5173` que es por defecto para Vite en entorno de desarrollo.

Para el build y ejecutar en producción, se pueden seguir los siguientes pasos una vez clonado el repositorio localmente:

- `pnpm run build`
- `pnpm run preview`
- Se lanzará en `localhost:4173` que es por defecto para el preview de producción de Vite.
