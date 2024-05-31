// ESTRUCTURA BASICA DE UN CONTEXT

// 1. importar context
import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// 2. crear el contexto
const AuthContext = createContext()

// 3.Creamos el provvedor del contexto (provider)
const AuthProvider = ({ children }) => {
  // Aqui va mi lógica
  const [isAuth, setIsAuth] = useState(false)// este estado sirve para saber si estoy autenticado (logeado)
  // este esado sirve para guardar la información del usuario a logear, la cual se adquiere con el token y se descifra el Payload
  const [userPayload, setUserPayload] = useState(null)

  // 4. Creamos la funcion de login
  const login = (token) => {
    localStorage.setItem('token', token)// este codigo obtiene el token que se almacena en el localstorage del usuario al logear
    const payload = jwtDecode(token)// este codigo decodifica el payload del token
    setIsAuth(true)// este codigo cambia el estado a true cuando ya se obtienen los datos del usuario
    setUserPayload(payload)// este codigo almacena la información en json de lo que extrajo del token
  }

  // 6.Creamos un useEffect para validar que se inicie sesión cuando se cierra el navegador sin que se halla cerrado la sesión. Carga los datos del usuario en automatico
  useEffect(() => {
    const token = localStorage.getItem('token')// obtiene el token del localstorage
    if (token) {
      const payload = jwtDecode(token)// este codigo decodifica el payload del token
      setIsAuth(true)// este codigo cambia el estado a true cuando ya se obtienen los datos del usuario
      setUserPayload(payload)// este codigo almacena la información en json de lo que extrajo del token
    }
  }, [])

  // 5.Creamos la función para deslogear (cerrar sesion)
  const logout = () => {
    localStorage.removeItem('token')// este codigo elimina la información del token almacenada en el localstorage
    setIsAuth(false)// este codigo cambia el estado a false cuando se cierra sesión
    setUserPayload(null)// se  limpian todos los datos del usuario
  }

  const data = {
    // aqui van las cosas que quiero hacer global
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
