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
 
Este Starter Kit de Adalab está creado en node y vite. ¿Y qué es un Starter kit? Pues es una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas.

Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más.

En el Kit hay 3 tipos de ficheros y carpetas:

Los ficheros que están sueltos en la raíz del repositorio, como vite.config.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos (excepto este README.md, para describir tu proyecto).
La carpeta src/: son los ficheros de nuestra página web, como HTML, CSS, JS...
La carpeta public/, que tiene fichero estáticos como imágenes, fuentes, favicon, librerías de JavaScript antiguas (jQuery, ...)
Y la carpeta docs/, que es generada automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de src/ y public/, los procesa y los genera dentro de public/ y docs/.
Guía de inicio rápido
NOTA: Necesitas tener instalado Node JS con una versión superior a la 14 para trabajar con este Starter Kit:

Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:
Crea tu propio repositorio.
Descarga este Starter kit desde GitHub.
No recomendamos que clones este repo ya que no podrás añadir commits.
Copia todos los ficheros de este Starter kit en la carpeta raíz de tu repositorio.
Recuerda que debes copiar también los ficheros ocultos que comienzan por un punto.
Si has decidido clonar este repo, no debes copiar la carpeta .git. Si lo haces estarás machacando tu propio repositorio.
Abre una terminal en la carpeta raíz de tu repositorio.
Instala las dependencias locales ejecutando en la terminal el comando:
npm install
Pasos para arrancar el proyecto:
Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. El proyecto hay que arrancarlo cada vez que te pongas a programar. Para ello ejecuta el comando:

npm run dev
Este comando:

Abre una ventana de Chrome y muestra tu página web, al igual que hace el plugin de VS Code Live Server (Go live).
También observa todos los ficheros que hay dentro de la carpeta src/, para que cada vez que modifiques un fichero refresca tu página en Chrome.
También procesa los ficheros HTML, SASS / CSS y JS. Por ejemplo:
Convierte los ficheros SASS en CSS.
Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.
Después de ejecutar npm run dev ya puedes empezar a editar todos los ficheros que están dentro de la carpeta src/ y programar cómodamente.

Pasos para publicar el proyecto en GitHub Pages:
Para generar tu página para producción ejecuta el comando:

npm run build
Y a continuación:

Sube a tu repo la carpeta docs/ que se te acaba de generar.
Entra en la pestaña settings de tu repo.
Y en el apartado de GitHub Pages activa la opción master branch /docs folder.
Y ya estaría!!!
Además, los comandos:

npm run push-docs
o

npm run deploy
son un atajo que nos genera la versión de producción y hace push de la carpeta docs/ del tirón. Te recomendamos ver el fichero package.json para aprender cómo funciona.

Estructura de carpetas
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