import { editCategoryApi } from '@/services/category'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'

function useEditCategory() {
    const queryClient = useQueryClient()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: editCategoryApi,
        mutationKey: (["category"]),
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries(["category"])
        },

        onError: (error) => {
            toast.error(error?.response.data.message)
        }
    })
    return { mutateAsync, isPending }
}

export default useEditCategory
