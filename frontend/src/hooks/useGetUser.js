

import { getUserProfileApi } from "@/services/authUser";
import { useQuery } from "@tanstack/react-query";

export default function useGetUser() {
    const { data, isLoading, error } = useQuery({
        queryFn: getUserProfileApi,
        queryKey: ["get-user"],
    },)

    const { user ,cart } = data || {}
    return { data, user, isLoading, error ,cart}
}