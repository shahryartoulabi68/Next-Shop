"use client"
import useCreatCategory from '@/hooks/useAddCategory'
import RHFSelect from '@/ui/RHFSelect'
import TextField from '@/ui/TextField'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export const categoryTypes = [
  {
    title: "محصول",
    _id: "product"
  },
  {
    _id: "post",
    title: "پست",

  },
  {
    _id: "ticket",
    title: "تیکت",
  },
  {
    _id: "comment",
    title: "نظرات",
  },
]

function page() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { isPending, mutateAsync } = useCreatCategory()

  const onSubmit = (data) => {


    mutateAsync(data, {
      onSuccess: () => {
        reset()
        router.push("/admin/categories")
      }
    })


  }

  return (
    <div >
      <h1 className='font-bold text-lg'> ایجاد دسته بندی جدید</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <TextField name="title" label="عنوان دسته بندی" register={register} required errors={errors} />
        <TextField name="englishTitle" label="عنوان لاتین دسته بندی" register={register} required errors={errors} />
        <RHFSelect label="تایپ"
          name="type" register={register} required options={categoryTypes} />

        <TextField name="description" label="توضیحات" register={register} required errors={errors} />
        <button className="btn btn--primary">تایید</button>
      </form>
    </div>
  )
}

export default page
