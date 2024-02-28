import { Post } from "../interface/post.interface";
import { countPostsByUser, findLongestTitles } from "../utils/post.utils";
import { endpointUrl } from "./constants";

// Función para obtener los datos del endpoint
export const fetchData = async (): Promise<Post[] | null> => {
  try {
    // Realiza la petición a la URL del endpoint
    const response: Response = await fetch(endpointUrl);

    // Verifica si la petición fue exitosa (código de estado 200)
    if (response.ok) {
      // Convierte la respuesta a formato JSON
      const data: Post[] = await response.json();
      const postsCountByUser: { [key: number]: number } =
        countPostsByUser(data);
      console.log("Número de publicaciones por usuario:", postsCountByUser);
      const longestTitles: { id: number; title: string }[] =
        findLongestTitles(data);
      console.log("Publicaciones con títulos más largos:", longestTitles);
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
