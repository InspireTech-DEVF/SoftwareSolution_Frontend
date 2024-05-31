import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import RoutesIndex from '../src/routes/RoutesIndex'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
