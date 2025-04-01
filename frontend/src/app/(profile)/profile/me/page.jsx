"use client"
import Loading from '@/app/Loading'
import useGetUser from '@/hooks/useGetUser'
import { updateUserProfileApi } from '@/services/authUser'
import ButtonIcon from '@/ui/ButtonIcon'
import TextField from '@/ui/TextField'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function Me() {
    const { isLoading, user } = useGetUser()
    const { name, email, phoneNumber, biography } = user || {}
    let defaultVal = {
        name, email, phoneNumber, biography
    }
    const queryClient = useQueryClient()
    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: updateUserProfileApi,
    })

    const { register, handleSubmit } = useForm({ defaultValues: defaultVal })
    const onSubmit = async (data) => {
        try {
            const res = await mutateAsync(data)
            queryClient.invalidateQueries({ queryKey: ["get-user"] })
            toast.success(res?.message)
        }
        catch (error) {
            toast.error(error?.response?.data?.message)
        }


    }
    if (isLoading) return <Loading />
    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="نام و نام خانوادگی"
                register={register}
                required
                name="name"
            />
            <TextField
                label="تلفن همراه"
                register={register}
                required
                name="phoneNumber"
            />
            <TextField
                label="ایمیل"
                register={register}
                required
                name="email"
            />
            <TextField
                label="اطلاعات بیشتر"
                register={register}
                required
                name="biography"
            />
            <div className="text-center ">
                {isPending ? <Loading />
                    :
                    <button className='btn btn--primary w-full py-3'>تایید</button>}
            </div>
        </form>
    )
}

export default Me
