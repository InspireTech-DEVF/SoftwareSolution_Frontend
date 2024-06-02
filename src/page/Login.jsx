import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from '@/hook/useAuth'
import axios from 'axios'
import '../Styles/forms.css'

const UserNew = () => {
  const { login } = useAuthContext() // trae la funcion de login del archivo context
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/api/v1/login', {
        email,
        password
      });
      const token = response.data.token;
      login(token);
      navigate('/')
      console.log('User created:', response.data);
      // Puedes hacer algo después de crear el usuario, como redireccionar o mostrar un mensaje de éxito
    } catch (err) {
      console.error('Error creating user:', err);
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' width={72} height={57} />
        <h1 className='h3 mb-3 fw-normal'>Inicio de sesion</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='floatingInput'>Correo electronico</label>
        </div>
       

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor='floatingPassword'>Contraseña</label>
        </div>
        

        <div className='form-check text-start my-3'>
          <input className='form-check-input' type='checkbox' value='remember-me' id='flexCheckDefault' />
          <label className='form-check-label' htmlFor='flexCheckDefault'>
            Recordarme...
          </label>
        </div>
        <button className='btn btn-primary w-100 py-2' type='submit'>Iniciar sesión</button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>

  )
}

export default UserNew
