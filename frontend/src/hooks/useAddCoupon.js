import { addNewCouponApi } from "@/services/adminService"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

function useAddCoupon() {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: addNewCouponApi,
        mutationKey: (["coupon"]),
        onSuccess: (data) => {
            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(error?.response.data.message)
        }
    })
    return { mutateAsync, isPending }
}

export default useAddCoupon