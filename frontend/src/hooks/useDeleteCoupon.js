import { deleteCouponApi } from "@/services/adminService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

function useDeleteCoupon() {
    const queryClient = useQueryClient()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: deleteCouponApi,
        mutationKey: (["coupon"]),
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries(["coupon"])
        },

        onError: (error) => {
            toast.error(error?.response.data.message)
        }
    })
    return { mutateAsync, isPending }
}

export default useDeleteCoupon