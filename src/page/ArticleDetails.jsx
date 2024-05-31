/* import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' // este codigo permite que el id del producto sea dinamico

const ArticleDetails = () => {
  const [item, setItem] = useState([])// estado para guardar el producto
  const { idItem } = useParams()

  useEffect(() => {
    fetch(`https://ecommerce-json-jwt.onrender.com/items/${idItem}`)
      .then(response => response.json())
      .then(data => setItem(data))
  }, [idItem])

  return (
    <> </>
  )
}

export default ArticleDetails */

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' // este codigo permite que el id del producto sea dinamico
import { getOneItemService } from '../services/itemServices'
import ImageComponent from '../components/ImageComponent'

const ArticleDetails = () => {
  const placeholderImage =
      'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-hay-icono-de-imagen-disponible-ilustraci%C3%B3n-vectorial-plana.jpg'

  const [item, setItem] = useState([]) // estado para guardar el producto
  const { idItem } = useParams()

  useEffect(() => {
    const getMeUser = async () => {
      const response = await getOneItemService(idItem)
      if (response.status === 200) {
        setItem(response.data)
      }
      console.log(response)
    }
    getMeUser()
  }, [idItem])

  return (
    <>
      <h1>Mis Datos</h1>
      {item?.product_name && <p>Nombre: {item.product_name}</p>}
      {item?.description && <p>Nombre: {item.description}</p>}
      {item?.price && <p>Nombre: {item.price}</p>}
      {item?.category && <p>Nombre: {item.category}</p>}
      {item?.brand && <p>Nombre: {item.brand}</p>}
      <div className='img'>
        <ImageComponent
          className='img'
          src={item.image}
          notFoundSrc={placeholderImage}
        />
      </div>
    </>
  )
}

export default ArticleDetails
