/**
 * Interfaz que define la estructura de los datos de una publicación obtenidos del endpoint.
 * Contiene propiedades como el ID del usuario, ID de la publicación, título y cuerpo del texto.
 */
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
