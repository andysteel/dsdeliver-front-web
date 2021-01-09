import axios from "axios";

const URL_API = 'http://localhost:8080'
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

export const fetchProducts = () => {
    return axios(`${URL_API}/products`)
}

export const fetchLocalMapBox = async (local: string) => {
    return await axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}