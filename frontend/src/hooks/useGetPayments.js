import { getPaymentListApi } from "@/services/adminService"
import { useQuery } from "@tanstack/react-query"

function useGetPayments() {
    const { data, isLoading } = useQuery({
        queryFn: getPaymentListApi,
        queryKey: ["get-payment"],
    },)

    const { payments } = data || {}
    return { payments, isLoading }
}
export default useGetPayments