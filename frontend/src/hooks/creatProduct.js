import { creatProductApi } from '@/services/productService'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'

function creatProduct() {
    const { data: dataProduct, mutateAsync, isPending } = useMutation({
        mutationFn: creatProductApi,
        mutationKey: (["product"]),
        onSuccess: (data) => {
            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(error?.response.data.message)
        }
    })
    return { mutateAsync, isPending }
}

export default creatProduct
