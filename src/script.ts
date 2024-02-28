import { fetchData } from "./api/post.api";
import { Post } from "./interface/post.interface";
import { countPostsByUser, findLongestTitles } from "./utils/post.utils";

/**
 * Procesa los datos obtenidos del endpoint.
 * Obtiene el número de publicaciones por usuario y las publicaciones con los títulos más largos.
 */
const processData = async (): Promise<void> => {
  try {
    // Obtiene los datos del endpoint
    const data: Post[] | null = await fetchData();

    if (data) {
      // Calcula el número de publicaciones por usuario
      const postsCountByUser: { [key: number]: number } =
        countPostsByUser(data);
      console.log("Número de publicaciones por usuario:", postsCountByUser);

      // Encuentra las publicaciones con los títulos más largos
      const longestTitles: { id: number; title: string }[] =
        findLongestTitles(data);
      console.log("Publicaciones con los 3 títulos más largos:", longestTitles);
    } else {
      console.log("No se pudieron obtener los datos.");
    }
  } catch (error: any) {
    console.error("Ocurrió un error durante el procesamiento:", error.message);
  }
};

// Inicia el proceso de obtención y procesamiento de datos
processData();
