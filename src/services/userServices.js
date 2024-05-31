/* 1. Para poder hacer el llamado a la api por medio de Axios, se necesita instalar la depencia de Axios:
npm install axios */

// 2. Hacemos la importación de Axios
import axios from 'axios'

// 3.Creamos una CONSTANTE para almacenar la url de la API a utilizar
const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

// 4. Creamos una constante para hacer el llamado a la API por medio de Axios para crear usuario
const registerUserServices = (data) => axios.post(`${BASE_URL}/register`, data)

// 6. Creamos una constante para hacer el llamado a la API por medio de Axios para iniciar sesion
const loginUserServices = (data) => axios.post(`${BASE_URL}/login`, data)

// 7. Mandamos los datos del token a la api para que nos devuelva los datos del usuario
const getMeUserServices = (jwtToken) =>
  axios.get(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${jwtToken}` }
  })

// 5. Hacemos la exportación
export {
  registerUserServices,
  loginUserServices,
  getMeUserServices
}
