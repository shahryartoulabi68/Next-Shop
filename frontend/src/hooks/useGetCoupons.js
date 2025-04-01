import { getcouponsApi } from "@/services/adminService"
import { useQuery } from "@tanstack/react-query"

export default function useGetCoupons() {
    const { data, isLoading } = useQuery({
        queryFn: getcouponsApi,
        queryKey: ["coupon"],
    },)

    const { coupons } = data || {}
    return { coupons, isLoading }
}