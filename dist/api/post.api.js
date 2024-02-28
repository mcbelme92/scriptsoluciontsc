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
exports.fetchData = void 0;
const constants_1 = require("./constants");
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
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Realiza la petición a la URL del endpoint
        const response = yield fetch(constants_1.endpointUrl);
        // Verifica si la petición fue exitosa (código de estado 200)
        if (response.ok) {
            const data = yield response.json();
            return data;
        }
        else {
            console.error("Error al obtener los datos:", response.statusText);
            return null;
        }
    }
    catch (error) {
        console.error("Error en la petición:", error.message);
        return null;
    }
});
exports.fetchData = fetchData;
