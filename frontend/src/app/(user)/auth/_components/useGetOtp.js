// import { getOTPApi } from "@/services/authUser"
// import { useMutation } from "@tanstack/react-query"
// import toast from "react-hot-toast"

// function useGetOtp() {
//     const { isPending, data: otpResponse, mutateAsync } = useMutation({
//         mutationFn: getOTPApi,
//         onSuccess: () => {
//             toast.success(data?.message)
//         },
//         onError: (error) => {
//             toast.error(error?.response?.data?.message)
//         }
//     })

//     return { isPending, otpResponse, mutateAsync }
// }

// export default useGetOtp
