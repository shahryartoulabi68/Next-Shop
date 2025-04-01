import { getProductByIdApi } from "@/services/productService"
import { useQuery } from "@tanstack/react-query"

function useGetProductById(id) {
    const { data, isLoading } = useQuery({
        queryFn: () => getProductByIdApi(id),
        queryKey: ["product"],
    },)

    const { product } = data || {}
    return { product, data, isLoading }
}
export default useGetProductById
