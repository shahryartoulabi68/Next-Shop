import { deleteProductApi } from "@/services/productService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

function useDeleteProduct() {
    const queryClient = useQueryClient()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: deleteProductApi,
        mutationKey: (["del-product"]),
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries(["product"])
        },

        onError: (error) => {
            toast.error(error?.response.data.message)
        }
    })
    return { mutateAsync, isPending }
}

export default useDeleteProduct