import { useState, useEffect } from 'react'
/* import { useAuthContext } from '@/hook/useAuth' */
import { getMeUserServices } from '@/services/userServices'

const MisDatos = () => {
  /*  const { userPayload } = useAuthContext() */
  const token = localStorage.getItem('token')
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const getMeUser = async () => {
      const response = await getMeUserServices(token)
      if (response.status === 200) {
        setUserData(response.data)
      }
      console.log(response)
    }
    getMeUser()
  }, [token])

  return (

    <>
      <h1>Mis Datos</h1>
      {userData?.first_name && <p>Nombre: {userData.first_name}</p>}
      {userData?.last_name && <p>Apellido: {userData.last_name}</p>}
      {userData?.gender && <p>Sexo: {userData.gender}</p>}
      {userData?.email && <p>Correo electrónico:: {userData.email}</p>}
      {userData?.role && <p>Rol del usuario: {userData.role}</p>}
      {/* {userPayload?.role === 'ADMIN'
        ? <h2>Hola ADMIN</h2>me muestra los datos del ADMIN si inicia sesión con usuario de ADMIN
        : <h2>Hola CUSTUMER</h2> me muestra los datos del COSTUMER si inicia sesión con usuario de CUSTUMER
      } */}
    </>

  )
}

export default MisDatos
