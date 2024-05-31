import { useNavigate } from 'react-router-dom'
/* Se necesia instalar la dependencia "npm i react-hook-form", para poder validar los formularios y luego importamos
con import { useForm } from 'react-hook-form' */
import { useForm } from 'react-hook-form'

import { registerUserServices } from '../services/userServices'
import Logo from '@/assets/react.svg'

function UserNew () {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit
    /* watch */
    /* formState: { errors } */
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await registerUserServices(data)
      if (response.status === 201) {
        navigate('/login')
      }
      console.log('response', response)
    } catch (error) {
      console.log('error', error.message)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <img className='mb-4' src={Logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Crear nuevo usuario</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='John'
            {...register('first_name', { required: true })}
          />
          <label htmlFor='first_name'>Nombre(s)</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Doe'
            {...register('last_name', { required: true })}// Este codigo es para hacer que el campo nombre sea obligatorio
          />
          <label htmlFor='last_name'>Apellido(s)</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            {...register('gender', { required: true })}
          >
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otros...</option>
          </select>
          <label htmlFor='gender'>Sexo</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          <label htmlFor='email'>Corréo electrónico</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          <label htmlFor='password'>Contraseña</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Crear cuenta</button>
        <p className='mt-5 mb-3 text-muted'> 2024</p>
      </form>
    </main>
  )
}

export default UserNew
