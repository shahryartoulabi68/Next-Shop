import { getCategoryByIdApi } from '@/services/category'
import { useQuery } from '@tanstack/react-query'

function useCategoryById(id) {
    const { data, isLoading } = useQuery({
        queryFn: () => getCategoryByIdApi(id),
        queryKey: ["category"],
    },)

    const { category } = data || {}
    return { category, data, isLoading }
}
export default useCategoryById
