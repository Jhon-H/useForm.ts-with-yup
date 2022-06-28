import React from 'react'
import { loginFormSchema } from './hook/schemas/Login.schema';
import { useForm } from './hook/useForm';

function App() {

  const {
    form,
    isError,
    messageError,
    handleChange,
    resetForm

  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: 123456789,
      file: [],
      checkbox: false
    },
    resolver: loginFormSchema
  })

  const { name, email, phone, checkbox } = form

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  // const handleChange: any = () => handleInputChange

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={handleChange}
        placeholder='Escribe tu nombre'
      /> <br />
       
      <input
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        placeholder='Escribe tu correo'
      /> <br />

      {
        isError && <p>{messageError}</p>
      }

      <input
        type='number'
        name='phone'
        value={phone}
        onChange={handleChange}
        placeholder='Escribe tu telefono'
      /> <br />

      <input
        type='file'
        name='file'
        onChange={handleChange}
      /> <br />
      
      <input
        type='checkbox'
        name='checkbox'
        checked={checkbox}
        onChange={handleChange}
      /> <br />

      <button>Send</button>
      <button type="reset" onClick={resetForm}>Reset Form</button>
    </form>
  );
}

export default App;
