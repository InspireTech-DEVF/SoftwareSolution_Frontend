import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-secondary px-4 py-5 text-center'>
      <div className='py-5'>
        <h1 className='display-5 fw-bold text-white'>
          Este es un proyecto DEV. F...
        </h1>
        <div className='col-lg-6 mx-auto'>
          <p className='fs-5 mb-4'>
            Sitio creado por © Sergio Guadalupe Ontiveros Ayala.
            <br />
            No tiene ninguna conexión con la base de datos de
            Mercado Libre, solo fue creado con fines educativos y
            practicos.
          </p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <NavLink to='https://www.linkedin.com/in/sergio-ontiveros-b42885231/'>
              {' '}
              <button
                type='button'
                className='btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold'
              >
                Ir a linkedin
              </button>
            </NavLink>
            <button
              type='button'
              className='btn btn-outline-light btn-lg px-4'
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
