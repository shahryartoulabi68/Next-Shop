import { getAllProductApi } from "@/services/productService"
import { useQuery } from "@tanstack/react-query"

export default function useGetProducts({ qs }) {
    const { data, isLoading, error } = useQuery({
        queryFn: () => getAllProductApi(qs),
        queryKey: (["product"]),
    },)

    const { products } = data || {}
    return { data, products, isLoading, error }
}