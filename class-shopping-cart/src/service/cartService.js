import axios from "axios";
import { API_BASE_URL } from "../constants";

/**
 * @summary - {HTTP GET REQUEST} - UI Service for fetching user Cart Details
 * @param {Number} userId - Loggedin user id
 * @returns {Array} cart details of user
 */
export const fetchCartDetailsByUser = async userId => {
    return await axios(`${API_BASE_URL}/carts/user/2`, {
        method: 'GET',
    }).then((jsonResponce) => jsonResponce.data)

}