import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/formNewItems.css'
import { useAuthContext } from '@/hook/useAuth'
import axios from 'axios'

// La función ItemNew es un componente de React funcional que utiliza el hook useState para inicializar y manejar el estado del formulario. Aquí está el desglose. Esto define una función llamada ItemNew que es un componente de React funcional.

/* -----En resúmen, este código define solo la inicialización del estado del formulario. Para manipular este estado y renderizar el formulario, deberías continuar  eescribiendo el resto del componente, incluyendo JSX para el formulario y las funciones necesarias para manejar cambios en los campos y enviar los datos del formulario.----- */
function ItemNew () {
  const [formData, setFormData] = useState({
    code: '',
    nameArticle: '',
    price: '',
    stock: '',
    users: '',
    categorias: '',
    lastName: '',
    image: null
  });
  const { userPayload } = useAuthContext();
  const esAdministrador = () => {
    return userPayload && userPayload.role === 'ADMIN';
  };

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
    console.log(formData);
  };

  // Este código está utilizando dos hooks de React Router y React Hook Form, respectivamente. Aquí te explico lo que hacen:
  /* -----En resumen, este fragmento de código configura la navegación y el manejo del formulario en un componente de React utilizando React Router y React Hook Form.----- */
  const navigate = useNavigate() // const navigate = useNavigate(): Este código utiliza el hook useNavigate proporcionado por React Router. Este hook te permite obtener una función de navegación que puedes utilizar para cambiar de ruta de forma programática en una aplicación de React Router. Por ejemplo, navigate('/ruta') se puede llamar para navegar a la ruta especificada.
  

  // Este fragmento de código define una función llamada onSubmit, que se utiliza para manejar el envío del formulario. Aquí está el desglose de lo que hace:
  /* -----En resumen, esta función onSubmit maneja el envío del formulario, realiza una solicitud al servidor para crear un nuevo elemento y maneja las respuestas y los errores resultantes.----- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    // const onSubmit = async (data) => {: Define una función asíncrona llamada onSubmit que toma un parámetro data. Esta función se ejecutará cuando se envíe el formulario.
    try {
      // const token = localStorage.getItem('token'): Recupera el token de acceso almacenado en el almacenamiento local del navegador utilizando localStorage.getItem('token'). Este token generalmente se usa para autenticar la solicitud del usuario.
      const response = await axios.post('http://localhost:8001/api/v1/articulo', data , esAdministrador(), {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })// const response = await createItemService(data, token): Llama a una función createItemService pasando los datos del formulario (data) y el token de acceso como argumentos. Esta función se utiliza para enviar los datos del formulario al servidor para crear un nuevo elemento.

      if (response.status === 200) {
        // if (response.status === 200) { navigate('/') }: Verifica si la respuesta del servidor tiene un estado 200 (éxito). Si es así, utiliza la función de navegación navigate('/') para redirigir al usuario a la página de inicio.
        alert('El producto se ha creádo con Éxito')
        navigate('/')
      }
      console.log('response', response) // console.log('response', response): Muestra la respuesta del servidor en la consola del navegador para fines de depuración.
    } catch (error) {
      // En caso de que ocurra un error durante la solicitud, se muestra una alerta al usuario indicando que solo un administrador puede dar de alta productos. Si el usuario es un administrador, se le pide que se ponga en contacto con el equipo de desarrollo. El error también se registra en la consola para fines de depuración.
      alert(
        'Lo sieto solo un ADMINISTRADOR pueder dar de alta productos. Sí eres ADMINISTRADOR contacta al equipo de desarrollo'
      )
      console.log('errores', error.message)
    }
  }
  // Este fragmento de código define un estado llamado imagePreview utilizando el hook useState. Aquí hay un desglose de lo que está sucediendo:
  /* -----En resumen, este código inicializa un estado llamado imagePreview con un valor inicial de cadena vacía '', que probablemente se utilizará para almacenar la URL de la vista previa de una imagen en una aplicación de React.----- */
  const [imagePreview, setImagePreview] = useState('') // useState(''): useState es un hook de React que se utiliza para agregar estado a los componentes funcionales. Toma un argumento que representa el valor inicial del estado. En este caso, el estado inicial de imagePreview se establece en una cadena vacía ('').const [imagePreview, setImagePreview]: Esto declara una variable de estado llamada imagePreview y una función llamada setImagePreview que se utiliza para actualizar el estado de imagePreview. La función useState devuelve un array donde el primer elemento (imagePreview) es el estado actual y el segundo elemento (setImagePreview) es la función que se utiliza para actualizar el estado.

  // Este fragmento de código define una función llamada handleImageError que se utiliza para manejar errores de carga de imágenes. Aquí está el desglose:
  /* -----En resumen, esta función handleImageError se utiliza para manejar errores de carga de imágenes estableciendo una imagen predeterminada en el estado imagePreview en caso de que ocurra un error al cargar la imagen original.----- */
  const handleImageError = () => { // const handleImageError = () => { ... }: Define una función flecha llamada handleImageError.
    setImagePreview(// SetImagePreview(...);: Utiliza la función setImagePreview para actualizar el estado de imagePreview. En este caso, se establece la URL de una imagen que se mostrará en caso de que ocurra un error al cargar la imagen original. Esto puede ser útil para mostrar una imagen predeterminada o un mensaje de error cuando la imagen original no está disponible.
      'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-hay-icono-de-imagen-disponible-ilustraci%C3%B3n-vectorial-plana.jpg'
    )
  }

  return (
    <div className='container_principal'>
      <div className='left'>
        <h2>REGISTRO DE NUEVO PRODUCTO</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='product_name'>Codigo de barra:</label>
            <input
              type='text'
              id='code'
              name='code'
              value={formData.code}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='product_name'>Nombre del Articulo:</label>
            <input
              type='text'
              id='nameArticle'
              name='nameArticle'
              value={formData.nameArticle}
              onChange={handleChange}
            />
          </div>
   

          <div className='form-group'>
            <label htmlFor='price'>Precio:</label>
            <input
              type='number'
              id='price'
              name='price'
              value={formData.price}
              onChange={handleChange}
              pattern='[0-9]*'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Stock:</label>
            <input
              type='number'
              id='stock'
              name='stock'
              value={formData.stock}
              onChange={handleChange}
              pattern='[0-9]*'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='brand'>Usuario:</label>
            <input
              type='text'
              id='users'
              name='users'
              value={formData.users}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='sku'>Categoria:</label>
            <input
              type='text'
              id='categorias'
              name='categorias'
              value={formData.categorias}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='image'>URL de la Imagen:</label>
            <input
              type='file'
              id='image'
              name='image'
              onChange={handleChange}
            />
          </div>

          <br />
          <button
            className='w-100 btn btn-lg btn-primary'
            type='submit'
          >
            Crear producto
          </button>
        </form>
      </div>

      <div className='right'>
        <label>IMAGEN PREVIA DEL PRODUCTO</label>
        <div className='image-preview' id='image-preview'>
          <img
            src={imagePreview}
            alt='Product Preview'
            onError={handleImageError}
            // {handleImageError}: Aquí se pasa una función llamada handleImageError como manejador del evento onError. Esto significa que cuando ocurra un error al cargar la imagen de la URL, se llamará a la función handleImageError para manejarlo.
          />
        </div>
      </div>
    </div>
  )
}

export default ItemNew
