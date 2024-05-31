import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hook/useAuth'
import Home from '@/page/Home'
import Login from '../page/Login'
import ArticleDetails from '../page/ArticleDetails'
import UserNew from '../page/UserNew'
import Ofertas from '../page/Ofertas'
import Historial from '../page/Historial'
import MyShopping from '../page/MyShopping'
import MisDatos from '../page/MisDatos'
import ItemNew from '../page/ItemNew'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ofertas' element={<Ofertas />} />
      <Route path='/historial' element={<Historial />} />
      <Route path='/login' element={<Login />} />
      <Route path='/usernew' element={<UserNew />} />
      <Route path='/items/:idItem' element={<ArticleDetails />} />
      <Route path='/mis_compras' element={isAuth ? <MyShopping /> : <Navigate to='/login' />} />{/* este codigo protege las rutas si no estas autenticado */}
      <Route path='/mis_datos' element={isAuth ? <MisDatos /> : <Navigate to='/login' />} />{/* este codigo protege las rutas si no estas autenticado */}
      <Route path='/item_new' element={isAuth ? <ItemNew /> : <Navigate to='/login' />} />{/* este codigo protege las rutas si no estas autenticado */}
    </Routes>
  )
}

export default RoutesIndex
