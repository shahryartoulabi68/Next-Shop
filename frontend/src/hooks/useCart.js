import { addToCartApi, removefromCartApi } from "@/services/cartService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export function useAddToCart() {
    const queryClient = useQueryClient()

    const { mutateAsync, isPending, data } = useMutation({
        mutationFn: addToCartApi,
        mutationKey: ["addToCart"],
        onSuccess: (data) => {
            toast.success(data?.message)
            queryClient.invalidateQueries(["get-user"])
        },
        onError: (error) => {
            toast.error(error?.response.data.message)
        }
    })

    return { mutateAsync, isPending, data }
}

export function useremoveFromCart() {
    const queryClient = useQueryClient()

    const { mutateAsync:removeMutate, isPending:isRemive, data } = useMutation({
        mutationFn: removefromCartApi,
        mutationKey: ["addToCart"],
        onSuccess: (data) => {
            toast.success(data?.message)
            queryClient.invalidateQueries(["get-user"])
        },
        onError: (error) => {
            toast.error(error?.response.data.message)
        }
    })

    return { removeMutate, isRemive, data }
}