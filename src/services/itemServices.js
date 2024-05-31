// Servicios para llamar a la API de los productos

/* 1. Para poder hacer el llamado a la api por medio de Axios, se necesita instalar la depencia de Axios:
npm install axios */

// 2. Hacemos la importación de Axios
import axios from 'axios'

// 3.Creamos una CONSTANTE para almacenar la url de la API a utilizar
const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

// 4. Creamos una constante para hacer el llamado a la API por medio de Axios para llamar a todos los productos
const getAllItemsService = () => axios.get(`${BASE_URL}/items`)

// 4.1 Creamos una constante para hacer el llamado a la API por medio de Axios para llamar a un solo producto por medio del id
const getOneItemService = (idItem) => axios.get(`${BASE_URL}/items/${idItem}`)

// 4.2 Creamos una constante para hacer el llamado a la API por medio de Axios para llamar dar de alta un producto

const createItemService = (data, jwtToken) =>
  axios.post(`${BASE_URL}/items`, data, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

export {
  getAllItemsService,
  getOneItemService,
  createItemService

}
