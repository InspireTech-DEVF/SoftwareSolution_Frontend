import { useState, useEffect } from 'react'
import Articulos from '../assets/db.json'

import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
const Tarjeta = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    // Simulo la llamada a API añadiendo un pequeño retraso de 2000 milisegundos
    setTimeout(() => {
      setProduct(Articulos.items)
    })
  }, [])

  return (

    <div className='container'>
      {Array.isArray(product) && product.map((producto) => (
        <div className='tarjeta' key={producto.id}>
          <NavLink to='/article_details'>
            <div className='contenedor_producto'>
              <Card.Img className='img' variant='top' src={producto.img_card} />
            </div>
            <div>
              <p className='product_nam'>{producto.product_name}</p>
              <h4>{` ${producto.price}`}</h4>
            </div>
          </NavLink>
        </div>
      ))}
    </div>

  )
}

export default Tarjeta
