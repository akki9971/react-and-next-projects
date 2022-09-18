import { API_BASE_URL } from "../constants";

// fetch api
// axios -- need to install package

/**
 * @summary { HTTP GET REQUEST } - Fetching all products
 * @returns {Array} Returns array of products
 */
export const fetchAllProducts = async () => {
    return fetch(`${API_BASE_URL}/products`)
        .then((responce) => responce.json())
        .catch((error) => {
            console.log(error);
            alert('ERROR in fetching Products list !!');
        })
}