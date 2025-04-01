import { getAllCategoryApi } from "@/services/category"
import { useQuery } from "@tanstack/react-query"

export default function useGetAllCategory() {
    const { data, isLoading } = useQuery({
        queryFn: getAllCategoryApi,
        queryKey: ["category"],
    },)

    const { categories } = data || {}
    return { categories, isLoading }
}