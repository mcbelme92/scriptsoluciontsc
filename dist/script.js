"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_api_1 = require("./api/post.api");
const post_utils_1 = require("./utils/post.utils");
/**
 * Procesa los datos obtenidos del endpoint.
 * Obtiene el número de publicaciones por usuario y las publicaciones con los títulos más largos.
 */
const processData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtiene los datos del endpoint
        const data = yield (0, post_api_1.fetchData)();
        if (data) {
            // Calcula el número de publicaciones por usuario
            const postsCountByUser = (0, post_utils_1.countPostsByUser)(data);
            console.log("Número de publicaciones por usuario:", postsCountByUser);
            // Encuentra las publicaciones con los títulos más largos
            const longestTitles = (0, post_utils_1.findLongestTitles)(data);
            console.log("Publicaciones con los 3 títulos más largos:", longestTitles);
        }
        else {
            console.log("No se pudieron obtener los datos.");
        }
    }
    catch (error) {
        console.error("Ocurrió un error durante el procesamiento:", error.message);
    }
});
// Inicia el proceso de obtención y procesamiento de datos
processData();
