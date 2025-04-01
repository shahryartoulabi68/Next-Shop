import { deleteCategoryApi } from "@/services/adminService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

function useDeleteCategory() {
    const queryClient = useQueryClient()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: deleteCategoryApi,
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

export default useDeleteCategory