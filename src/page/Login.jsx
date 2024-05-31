import { useNavigate } from 'react-router-dom'
import { loginUserServices } from '../services/userServices'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '@/hook/useAuth'
import '../Styles/forms.css'

const UserNew = () => {
  const { login } = useAuthContext() // trae la funcion de login del archivo context
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserServices(data)
      if (response.status === 200) {
        login(response.data.token)// Esta linea de codigo guarda en el Local Storage el token cuando el usuario inicia sesion
        navigate('/mis_datos')
      }
      console.log('response', response)
    } catch (error) {
      console.log('error', error.message)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className='mb-4' width={72} height={57} />
        <h1 className='h3 mb-3 fw-normal'>Inicio de sesion</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          <label htmlFor='floatingInput'>Correo electronico</label>
        </div>
        {errors.email && <span className='text-danger'>Este campo es requerído</span>}

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            {...register('password', { required: true })}

          />
          <label htmlFor='floatingPassword'>Contraseña</label>
        </div>
        {errors.password && <span className='text-danger'>Este campo es requerído</span>}

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
