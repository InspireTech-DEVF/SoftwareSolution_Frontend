import { useState } from 'react'
import { createItemService } from '../services/itemServices'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import '../Styles/formNewItems.css'

// La función ItemNew es un componente de React funcional que utiliza el hook useState para inicializar y manejar el estado del formulario. Aquí está el desglose. Esto define una función llamada ItemNew que es un componente de React funcional.

/* -----En resúmen, este código define solo la inicialización del estado del formulario. Para manipular este estado y renderizar el formulario, deberías continuar  eescribiendo el resto del componente, incluyendo JSX para el formulario y las funciones necesarias para manejar cambios en los campos y enviar los datos del formulario.----- */
function ItemNew () {
  // El hook useState devuelve un array donde el primer elemento (productData) es el estado actual y el segundo elemento (setProductData) es la función para actualizar ese estado.
  const [productData, setProductData] = useState({
    // Utiliza el hook useState para inicializar el estado del componente. La variable de estado productData almacena los datos del producto, mientras que setProductData es la función que se utiliza para actualizar este estado. Se establece un objeto inicial con todas las propiedades necesarias para el formulario, como product_name, description, price, category, brand, sku e image, y se les asigna un valor inicial vacío.
    product_name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    sku: '',
    image: ''
  })

  // Este fragmento de código define una función llamada "handleChange", que se utiliza para manejar los cambios en los campos de un formulario.Aquí está su desglose:
  /* -----En resumen, esta función handleChange se encarga de actualizar dinámicamente el estado del formulario cada vez que se produce un cambio en cualquier campo de entrada del formulario, lo que permite que los datos del formulario se mantengan sincronizados con los valores ingresados por el usuario.----- */
  const handleChange = (e) => {
    // Define una función flecha llamada handleChange que toma un evento (e) como argumento. Este evento se activa cuando se produce un cambio en un campo de entrada del formulario.
    const { name, value } = e.target // Utiliza la desestructuración para extraer las propiedades name y value del elemento del DOM que desencadenó el evento. e.target se refiere al elemento específico del formulario en el que se realizó el cambio.
    setProductData({ ...productData, [name]: value }) // Utiliza la función setProductData para actualizar el estado del producto. Se copia el estado actual de productData con el operador spread ..., y luego se sobrescribe la propiedad específica (determinada por name) con el nuevo valor (value). Esto garantiza que el estado del producto se actualice correctamente con el nuevo valor ingresado en el campo de formulario.
  }

  // Este fragmento de código define una función llamada handleImageUrlChange, que se utiliza para manejar cambios en el campo de entrada de la URL de la imagen. Aquí está su desglose:
  /* -----En resumen, esta función handleImageUrlChange se utiliza para actualizar dinámicamente el estado del componente cuando el usuario introduce una nueva URL de imagen en el campo de entrada correspondiente.----- */
  const handleImageUrlChange = (event) => {
    // Define una función flecha llamada handleImageUrlChange que toma un evento event como argumento. Este evento se activa cuando se produce un cambio en el campo de entrada de la URL de la imagen.
    const image = event.target.value // Extrae el valor del campo de entrada de la URL de la imagen del evento utilizando event.target.value. Esto captura la URL de la imagen que el usuario ha ingresado en el campo de entrada.
    setImagePreview(image) // Llama a la función setImagePreview para establecer el estado de la variable imagePreview con el valor de la URL de la imagen. Esto actualizará el estado de imagePreview, lo que provocará que el componente se vuelva a renderizar y muestre la vista previa de la imagen correspondiente a la URL ingresada por el usuario.
  }

  // Este código está utilizando dos hooks de React Router y React Hook Form, respectivamente. Aquí te explico lo que hacen:
  /* -----En resumen, este fragmento de código configura la navegación y el manejo del formulario en un componente de React utilizando React Router y React Hook Form.----- */
  const navigate = useNavigate() // const navigate = useNavigate(): Este código utiliza el hook useNavigate proporcionado por React Router. Este hook te permite obtener una función de navegación que puedes utilizar para cambiar de ruta de forma programática en una aplicación de React Router. Por ejemplo, navigate('/ruta') se puede llamar para navegar a la ruta especificada.
  const { register, handleSubmit } = useForm() // const { register, handleSubmit } = useForm(): Este código utiliza el hook useForm proporcionado por React Hook Form. useForm es un hook que devuelve métodos y objetos para trabajar con formularios no controlados en React. "register" es una función que se utiliza para registrar campos de entrada en el formulario y "handleSubmit" es una función que se utiliza para manejar la presentación del formulario.

  // Este fragmento de código define una función llamada onSubmit, que se utiliza para manejar el envío del formulario. Aquí está el desglose de lo que hace:
  /* -----En resumen, esta función onSubmit maneja el envío del formulario, realiza una solicitud al servidor para crear un nuevo elemento y maneja las respuestas y los errores resultantes.----- */
  const onSubmit = async (data) => {
    // const onSubmit = async (data) => {: Define una función asíncrona llamada onSubmit que toma un parámetro data. Esta función se ejecutará cuando se envíe el formulario.
    try {
      const token = localStorage.getItem('token') // const token = localStorage.getItem('token'): Recupera el token de acceso almacenado en el almacenamiento local del navegador utilizando localStorage.getItem('token'). Este token generalmente se usa para autenticar la solicitud del usuario.
      const response = await createItemService(data, token) // const response = await createItemService(data, token): Llama a una función createItemService pasando los datos del formulario (data) y el token de acceso como argumentos. Esta función se utiliza para enviar los datos del formulario al servidor para crear un nuevo elemento.

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <label htmlFor='product_name'>Nombre del Producto:</label>
            <input
              type='text'
              id='product_name'
              name='product_name'
              {...register('product_name', { required: true })}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Descripcción:</label>
            <textarea
              id='description'
              name='description'
              {...register('description', { required: true })}
              onChange={handleChange}
              rows='1'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='price'>Precio:</label>
            <input
              type='number'
              id='price'
              name='price'
              {...register('price', { required: true })}
              onChange={handleChange}
              pattern='[0-9]*'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='category'>Categoría:</label>
            <select
              id='category'
              name='category'
              {...register('category', { required: true })}
              onChange={handleChange}
            >
              <option value='' disabled>
                Seleccione categoría
              </option>
              <option value='Electronics'>Abarrotes</option>
              <option value='Clothing'>Electronico</option>
              <option value='Books'>Libros</option>
              <option value='Furniture'>Frutas</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='brand'>Marca:</label>
            <input
              type='text'
              id='brand'
              name='brand'
              {...register('brand', { required: true })}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='sku'>Sku:</label>
            <input
              type='text'
              id='sku'
              name='sku'
              {...register('sku', { required: true })}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='image'>URL de la Imagen:</label>
            <input
              type='url'
              id='image'
              name='image'
              {...register('image', { required: true })}
              onChange={handleImageUrlChange}
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
