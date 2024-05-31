import { useState, useEffect } from 'react'
/* import { useAuthContext } from '@/hook/useAuth' */
import { getOneItemService } from '../services/itemServices'

const ArticleDetails = () => {
  /*  const { userPayload } = useAuthContext() */

  const [userData, setUserData] = useState({})

  useEffect(() => {
    const getMeUser = async () => {
      const response = await getOneItemService()
      if (response.status === 200) {
        setUserData(response.data)
      }
      console.log(response)
    }
    getMeUser()
  }, [])

  return (
    <>
      <h1>Mis Datos</h1>
      {userData?.product_name && <p>Nombre: {userData.product_name}</p>}
      {userData?.description && <p>Nombre: {userData.description}</p>}
      {userData?.price && <p>Nombre: {userData.price}</p>}
      {userData?.category && <p>Nombre: {userData.category}</p>}
      {userData?.brand && <p>Nombre: {userData.brand}</p>}

    </>
  )
}

export default ArticleDetails
