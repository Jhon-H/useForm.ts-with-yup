import { FormEvent, useEffect, useState } from "react"
import {} from 'yup'

export function useForm<T extends Object>({ defaultValues, resolver }: { defaultValues: T, resolver: any}) {

  const [form, setForm] = useState<T>(defaultValues)
  const [isError, setIsError] = useState(false) //TODO: {key of T: boolean}
  const [messageError, setMessageError] = useState('')

  useEffect(() => {
    resolver
    .isValid(form)
    .then( valid => {setIsError(!valid); setMessageError('EY, revisarlo!!!'); });
  }, [form, resolver])


  // handle change
  const handleChange = (event: FormEvent<HTMLInputElement>)  => {
    if (event.currentTarget.type === 'file') {
      handleFileChange(event)
      
    } else if (event.currentTarget.type === 'checkbox') {
      handleCheckBoxChange(event)
      
    } else {
      handleInputChange(event)
    }
  }

  const handleInputChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [currentTarget.name]: currentTarget.value
    })
  }
  
  const handleFileChange = ({ currentTarget: { name, files } }: FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [name]: files?.length && files[0]
    })
  }

  const handleCheckBoxChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [currentTarget.name]: currentTarget.checked
    })
  } 

  const resetForm = () => {
    setForm(defaultValues);
  }

  return {
    form,
    isError,
    messageError,

    resetForm,
    handleChange
  }
}
