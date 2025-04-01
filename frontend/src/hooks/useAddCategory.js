import { creatCategoryApi } from "@/services/adminService"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

function useCreatCategory() {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: creatCategoryApi,
        mutationKey: (["category"]),
        onSuccess: (data) => {
            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(error?.response.data.message)
        }
    })
    return { mutateAsync, isPending }
}

export default useCreatCategory