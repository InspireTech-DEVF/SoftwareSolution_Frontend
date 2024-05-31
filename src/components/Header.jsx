import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hook/useAuth'
import Logo from '../img/logo_mercado_libre1.png'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Promo from '../img/disney.webp'

const Header = () => {
  const { isAuth, logout } = useAuthContext()
  return (

    <div className='header'>
      {/* div del logo de mercado libre */}
      <div className='contenido_navbar'>
        <div className='nav-left-top'>
          <NavLink to='/'><img src={Logo} /></NavLink>
        </div>

        {/* div de la barra buscadora */}
        <div className='nav-center-top'>
          <div className='search'>
            <input type='text' name='' id='' placeholder='Buscar productos, marcas y más…' />
          </div>
        </div>

        {/* div del logo de Suscribete */}
        <div className='nav-right-top'>
          <img src={Promo} alt='' />
        </div>

        <div className='nav-left-bottom'>Enviar a</div>
        <div className='nav-center-bottom'>
          <Nav className='me-auto'>
            <NavDropdown className='menu' title='Categoría'>
              <NavDropdown.Item to='vehículos'>Vehículos</NavDropdown.Item>
              <NavDropdown.Item to='vehículos'>Electrodomesticos</NavDropdown.Item>

            </NavDropdown>
            <NavLink className='menu' to='/ofertas'>Ofertas</NavLink>
            <NavLink className='menu' to='/historial'>Historial</NavLink>
            <NavLink className='menu' to='/supermercado'>Supermercado</NavLink>
            <NavLink className='menu' to='/moda'>Moda</NavLink>
            <NavLink className='menu' to='/mercadoplay'>Mercado Play</NavLink>
            <NavLink className='menu' to='/vender'>Vender</NavLink>
            <NavLink className='menu' to='/ayuda'>Ayuda</NavLink>
          </Nav>
        </div>

        <div className='nav-right-bottom'>
          <Nav>
            {/* Esta parte del codigo muestra ciertas opcciones si estas o no autenticado con un operador ternario */}
            {isAuth
              ? (
                <>
                  {/* Esta parte del codigo muestra en el menu estas opcciones cuando SI estas autenticado */}
                  <NavLink className='menu' to='/mis_datos'>Mis datos</NavLink>
                  <NavLink className='menu' to='/mis_compras'>Mis compras</NavLink>
                  <NavLink className='menu' to='/item_new'>Nuevo Producto</NavLink>
                  <NavLink className='menu' to='/' onClick={logout}>Cerrar sesión</NavLink>

                </>
                )
              : (
                <>
                  {/* Esta parte del codigo muestra en el menu estas opcciones cuando NO estas autenticado */}
                  <NavLink className='menu' to='/usernew'>Crea tu cuenta</NavLink>
                  <NavLink className='menu' to='/login'>Ingresa</NavLink>

                </>

                )}

          </Nav>
        </div>

      </div>
    </div>

  )
}

export default Header
