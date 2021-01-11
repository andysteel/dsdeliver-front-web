import axios from "axios";
import { OrderPayload } from "./Orders/types";

const setUrl = (host: string) => {
    return host.includes('localhost') ? 'http://localhost:8080' : 'https://dsdeliver-andysteel.herokuapp.com';
}

const URL_API = setUrl(window.location.hostname);
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

export const fetchProducts = () => {
    return axios(`${URL_API}/products`)
}

export const fetchLocalMapBox = async (local: string) => {
    return await axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export const saveOrder = (payload: OrderPayload) => {
    return axios.post(`${URL_API}/orders`, payload)
}