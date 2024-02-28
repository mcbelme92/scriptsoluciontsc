Proyecto Empleo

Descripción
Este proyecto es una aplicación TypeScript que utiliza la biblioteca node-fetch para realizar solicitudes HTTP a un endpoint de una API y procesar los datos recibidos. La aplicación cuenta con una estructura modular y utiliza TypeScript para un desarrollo más seguro y mantenible.

Estructura de Carpetas y Archivos
pai/: Carpeta que contiene la lógica relacionada con la API.
post.api.ts: Archivo que contiene la función fetchData para realizar solicitudes a la API.
interface/: Carpeta que contiene las interfaces TypeScript utilizadas en el proyecto.
post.interface.ts: Define la interfaz Post para representar los datos de las publicaciones.
utils/: Carpeta que contiene funciones de utilidad para el procesamiento de datos.
post.utils.ts: Contiene funciones para contar el número de publicaciones por usuario y encontrar las 3 publicaciones con los títulos más largos.
script.tsc: Archivo principal que importa la función fetchData y procesa los datos recibidos de la API.
README.md: Archivo de documentación que proporciona información sobre el proyecto y cómo ejecutarlo.
Configuración del Proyecto
node-fetch: Biblioteca utilizada para realizar solicitudes HTTP en entornos de Node.js.
TypeScript: Lenguaje de programación utilizado para escribir código con tipado estático.
API externa: El proyecto utiliza una API externa (JSONPlaceholder) para obtener datos de publicaciones.
Instalación y Uso
Clona el repositorio desde https://github.com/mcbelme92/scriptsoluciontsc.git
Instala las dependencias utilizando el comando npm install.
Ejecuta el proyecto con npm start.

## PostUtils

Path: `./src/utils/postUtils.ts`

Funciones de Utilidad para Publicaciones
Este proyecto contiene dos funciones de utilidad diseñadas para analizar conjuntos de publicaciones.

countPostsByUser
La función countPostsByUser permite contar el número de publicaciones por usuario. Recibe un array de objetos Post que representan las publicaciones y devuelve un objeto donde las claves son los IDs de usuario y los valores son el número de publicaciones asociadas a ese usuario.

findLongestTitles
La función findLongestTitles identifica las publicaciones con los títulos más largos. Ordena las publicaciones según la longitud de sus títulos y devuelve las tres publicaciones con los títulos más largos.

Ejemplo de uso:

```ts

import { Post } from "./interface/post.interface";
import { countPostsByUser, findLongestTitles } from "./utils/post.utils.ts";

// Ejemplo de uso de countPostsByUser
const posts: Post[] = [...]; // Obtener los datos de las publicaciones
const postsByUser = countPostsByUser(posts);
console.log(postsByUser);

// Ejemplo de uso de findLongestTitles
const longestTitles = findLongestTitles(posts);
console.log(longestTitles);

const posts = [...] // Array de publicaciones
const longestTitles = findLongestTitles(posts);
console.log("Publicaciones con títulos más largos:", longestTitles);

```
