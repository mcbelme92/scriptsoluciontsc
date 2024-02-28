import { Post } from "../interface/post.interface";
import { endpointUrl } from "./constants";

/**
 * Realiza una solicitud al endpoint especificado para obtener datos de publicaciones.
 * @returns Una promesa que resuelve en un array de objetos de tipo `Post` si la solicitud es exitosa, de lo contrario, devuelve `null`.
 * @example
 * // Ejemplo de uso:
 * fetchData()
 *   .then((data) => {
 *     if (data) {
 *       console.log("Datos obtenidos:", data);
 *     } else {
 *       console.log("No se pudieron obtener los datos.");
 *     }
 *   })
 *   .catch((error) => {
 *     console.error("Ocurrió un error:", error);
 *   });
 */
export const fetchData = async (): Promise<Post[] | null> => {
  try {
    // Realiza la petición a la URL del endpoint
    const response: Response = await fetch(endpointUrl);
    // Verifica si la petición fue exitosa (código de estado 200)
    if (response.ok) {
      const data: Post[] = await response.json();
      return data;
    } else {
      console.error("Error al obtener los datos:", response.statusText);
      return null;
    }
  } catch (error: any) {
    console.error("Error en la petición:", error.message);
    return null;
  }
};
