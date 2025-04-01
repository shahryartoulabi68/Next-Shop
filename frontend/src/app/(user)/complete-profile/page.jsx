"use client"
import { completeProfileApi } from '@/services/authUser'
import ButtonIcon from '@/ui/ButtonIcon'
import TextField from '@/ui/TextField'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function page() {
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  const { isPending, error, data: otpResponse, mutateAsync } = useMutation({
    mutationFn: completeProfileApi,
  })
  const onSubmit = async (data) => {
    try {
      const { message } = await mutateAsync(data)
      toast.success(message)
      router.push("/")
    }
    catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (

    <div className='m-auto max-w-md flex items-center justify-center'>
      <div className='w-full'>
        <h1 className='mb-8 text-secondary-800 font-bold'>لطفا اطلاعات خود را تکمیل نمایید</h1>
        <form className='w-full form' onSubmit={handleSubmit(onSubmit)}>
          <TextField name="name" register={register} required
            label="نام و نام خوانوادگی" />
          <TextField register={register} name="email" label="ایمیل" required />
          <ButtonIcon variant="primary" className="py-3">تایید</ButtonIcon>
        </form>
      </div>

    </div>


  )
}

export default page
