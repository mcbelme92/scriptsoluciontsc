Descripción General
Este proyecto está diseñado para obtener datos de un endpoint de API que proporciona información sobre publicaciones. Luego, realiza ciertas operaciones para analizar y mostrar los datos de manera estructurada. Utiliza TypeScript para garantizar la seguridad y la integridad del código.

Componentes Principales
El proyecto consta de los siguientes componentes principales:

1. Interface Post
   El archivo post.interface.ts define la estructura de datos de una publicación.

Propiedades:
userId: El identificador del usuario que realizó la publicación.
id: El identificador único de la publicación.
title: El título de la publicación.
body: El cuerpo o contenido de la publicación.

2. API Post
   El archivo post.api.ts contiene la lógica para obtener datos del endpoint de la API.

Funciones:
fetchData: Realiza una solicitud HTTP al endpoint de la API para obtener los datos de las publicaciones.

3. Utilidades de Publicaciones
   El archivo post.utils.ts contiene funciones útiles para el procesamiento de datos de las publicaciones.

Funciones:
countPostsByUser: Calcula el número de publicaciones por usuario.
findLongestTitles: Encuentra las 3 publicaciones con los títulos más largos. 4. Script Principal
El archivo script.ts es el punto de entrada principal del proyecto.

Funciones:
processData: Recupera los datos de las publicaciones utilizando la función fetchData, y luego utiliza las utilidades de publicaciones para analizar y mostrar los datos obtenidos.
Funcionamiento del Proyecto
El script principal, script.ts, inicia el proceso de obtención y procesamiento de los datos de las publicaciones.
Utiliza la función fetchData para obtener los datos del endpoint de la API.
Una vez que se reciben los datos, utiliza las utilidades de publicaciones para realizar análisis y generar estadísticas sobre las publicaciones.
Finalmente, muestra los resultados en la consola.
Este proyecto proporciona una manera eficiente de obtener, analizar y visualizar datos de publicaciones, lo que puede ser útil para diversos propósitos de análisis y visualización de datos.

## Script.ts

Path: `.src/script.ts`

Descripción:
Las funciones countPostsByUser y findLongestTitles se importan desde el módulo post.utils. Se utilizan para calcular el número de publicaciones por usuario y encontrar las publicaciones con los títulos más largos, respectivamente.

Función processData

Descripción:
La función processData es asincrónica y realiza el procesamiento de los datos obtenidos de la API.
Utiliza fetchData para obtener los datos de las publicaciones.
Si los datos se reciben correctamente, utiliza las funciones countPostsByUser y findLongestTitles para analizar los datos y generar estadísticas.
Finalmente, imprime los resultados en la consola.

```ts
const processData = async () => {
  const data: Post[] = await fetchData();
  if (data) {
    const postsCountByUser: { [key: number]: number } = countPostsByUser(data);
    console.log("Número de publicaciones por usuario:", postsCountByUser);
    const longestTitles: { id: number; title: string }[] =
      findLongestTitles(data);
    console.log("Publicaciones con títulos más largos:", longestTitles);
  }
};

processData();
```

## Post Utils

Path: `./src/utils/post.utils.ts`

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

## Post Api

Path: `./src/api/post.api.ts`

Funciones de Api

El archivo post.api.ts contiene la lógica para obtener datos del endpoint de la API.

Funciones:
fetchData: Realiza una solicitud HTTP al endpoint de la API para obtener los datos de las publicaciones.
