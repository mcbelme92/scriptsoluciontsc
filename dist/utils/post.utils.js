"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLongestTitles = exports.countPostsByUser = void 0;
/**
 * Cuenta el número de publicaciones por usuario.
 * @param posts Un array de objetos Post que representan las publicaciones.
 * @returns Un objeto donde las claves son los IDs de usuario y los valores son el número de publicaciones asociadas a ese usuario.
 */
const countPostsByUser = (posts) => {
    const postCount = {};
    posts.forEach((post) => {
        // Comprobación de tipo para evitar valores undefined
        if (post.userId !== undefined) {
            if (postCount[post.userId]) {
                postCount[post.userId] += 1;
            }
            else {
                postCount[post.userId] = 1;
            }
        }
    });
    return postCount;
};
exports.countPostsByUser = countPostsByUser;
/**
 * Encuentra las publicaciones con los títulos más largos.
 * @param posts Un array de objetos Post que representan las publicaciones.
 * @returns Un array de objetos con la estructura { id: number, title: string }, representando las publicaciones con los títulos más largos.
 */
const findLongestTitles = (posts) => {
    const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
    const longestTitles = sortedPosts.slice(0, 3);
    return longestTitles.map((post) => ({ id: post.id, title: post.title }));
};
exports.findLongestTitles = findLongestTitles;
