# Evaluación Módulo 2 - Buscador de cócteles

Desarrollo de una aplicación web que contiene un listado de bebidas y cócteles de todo el mundo, que nos permite des/marcar las bebidas como favoritas y guardarlas en local storage.
El objetivo principal era escribir el códido de JavaScript, con un HTML y CSS simples, que se pudieran modificar y personalizar una vez conseguido los requisitos básicos.

Los requisitos eran:
- Crear un campo de texto con un botón para buscar un cóctel por su título, y un botón para resetear los resultados de la búsqueda.
- Pintar el listado de los resultados de la búsqueda, donde debe aparecer la imágen del cóctel y el nombre.
- Al hacer clic sobre el botón de 'Buscar', la aplicación debe conectarse al API abierto de TheCocktailDB: (https://www.thecocktaildb.com/).
- Añadir una imagen de relleno en caso de que el cóctel no tenga imagen propia.
- Crear un listado de 'Favoritos', donde la usuaria pueda guardar cócteles haciendo clic encima de cada uno. El estilo de la tarjeta pintada debe cambiar al ser clicada, para resaltar que se ha añadido a 'Favoritos'. También debe poder borrarse de la lista al volver a hacer clic sobre el cóctel resaltado.
- Añadir un botón de reset para borrar de una vez todos los cócteles guardados en favoritos.
- Tanto las bebidas recogidas de la API como el listado de 'Favoritos' deben guardarse en el local storage.


## Instalación

Para poder modificar el proyecto:

`
git clone https://github.com/Adalab/modulo-2-evaluacion-final-ellisoalgo
`


## Starter Kit Template
 
Este proyecto se ha creado con el Starter Kit de Adalab.

El Starter Kit está creado en node y vite. ¿Y qué es un Starter kit? Pues es una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas.

Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más.

En el Kit hay 3 tipos de ficheros y carpetas:

Los ficheros que están sueltos en la raíz del repositorio, como vite.config.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos (excepto este README.md, para describir tu proyecto).
La carpeta src/: son los ficheros de nuestra página web, como HTML, CSS, JS...
La carpeta public/, que tiene fichero estáticos como imágenes, fuentes, favicon, librerías de JavaScript antiguas (jQuery, ...)
Y la carpeta docs/, que es generada automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de src/ y public/, los procesa y los genera dentro de public/ y docs/.

> NOTA: Necesitas tener instalado Node JS con una versión superior a la 14 para trabajar con este Starter Kit:


### Estructura de carpetas

La estructura de carpetas tiene esta pinta:

src
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 ├─ scss
 |  ├─ core
 |  ├─ layout
 |  └─ main.scss
 └─ html
    └─ partials
    └─ index.html