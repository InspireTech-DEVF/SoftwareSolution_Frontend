import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Logo from '@/assets/react.svg'


function UserNew () {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/api/v1/register', {
        name,
        email,
        password,
        lastName,
        birthday,
        address,
        phone,
        role
      });
      console.log('User created:', response.data);
      // Puedes hacer algo después de crear el usuario, como redireccionar o mostrar un mensaje de éxito
      navigate('/login')
    } catch (err) {
      console.error('Error creating user:', err);
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={Logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Crear nuevo usuario</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='name'>Nombre(s)</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor='LastName'>Apellido(s)</label>
        </div>
        <div className='form-floating'>
          <input
            type='date'
            className='form-control'
            id='birthday'
            name='birthday'
            min="1900-01-01" 
            max="2015-12-31"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <label htmlFor='Birthday'>Cumpleaños</label>
        </div>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='Email'>Corréo electrónico</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='address'
            name='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor='address'>Domicilio</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='phone'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor='Phone'>Telefono</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor='Password'>Contraseña</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='role'
            name='role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor='Role'>Role</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Crear cuenta</button>
        <p className='mt-5 mb-3 text-muted'> 2024</p>
      </form>
    </main>
  )
}

export default UserNew
