import { NavLink } from 'react-router-dom'

import ImageComponent from '../components/ImageComponent'

import { useState, useEffect } from 'react'
import { getAllItemsService } from '@/services/itemServices'

const TarjetaApi = () => {
  const placeholderImage =
      'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-hay-icono-de-imagen-disponible-ilustraci%C3%B3n-vectorial-plana.jpg'

  // Estado para guardar la info de los productos

  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemsData(response.data)
        }
      } catch (error) {
        console.log('error', error.message)
      }
    }
    getUserData()
  }, [])

  return (
    <div className='container'>
      {Array.isArray(itemsData) &&
              itemsData.map((producto) => (
                <div className='tarjeta' key={producto.id}>
                  {/* Este en lace <NavLink to={`/items/${producto.id}`}> te direcciona a la pagina detalle del producto al cual el usuario le dió clic */}
                  <NavLink to={`/items/${producto.id}`}>
                    <div className='contenedor_producto'>
                      <ImageComponent
                        className='img'
                        src={producto.image}
                        notFoundSrc={placeholderImage}
                      />
                    </div>
                    <div>
                      <p className='product_nam'>
                        {producto.product_name}
                      </p>
                      <h4>{` ${producto.price}`}</h4>
                    </div>
                  </NavLink>
                </div>
              ))}
    </div>
  )
}

export default TarjetaApi
