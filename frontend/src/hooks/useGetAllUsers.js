import { getAllUserApi } from "@/services/adminService"
import { useQuery } from "@tanstack/react-query"

export default function useGetAllusers(qs) {
    const { data, isLoading, error } = useQuery({
        queryFn: () => getAllUserApi(qs),
        queryKey: ["users", qs],
    },)

    const { users } = data || {}
    return { users, isLoading, error }
}