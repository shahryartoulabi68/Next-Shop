"use client"
import Loading from "@/app/Loading"
import PaymentList from "./PaymentList"
import useGetPayments from "@/hooks/useGetPayments"
function PaymentPage() {
    const { payments, isLoading } = useGetPayments()
    // const { payments } = await getPaymentListApi()
    if (isLoading) return <Loading />
    return (
        <div>
            <h1 className='font-bold text-lg mb-8 text-secondary-800'>لیست پرداخت ها</h1>
            <PaymentList payments={payments} />
        </div>
    )
}

export default PaymentPage
