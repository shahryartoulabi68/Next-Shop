"use client"

import useGetUser from "@/hooks/useGetUser"
import PaymentsTable from "./PaymentsTable";

function PaymentsPage() {

    const { isLoading, data, user } = useGetUser()
    const { payments } = data || {}


    return (
        <div className="">
            <h1 className="font-bold text-lg mb-4">سفارشات کاربر</h1>
            <PaymentsTable payments={payments} />

        </div>
    )
}

export default PaymentsPage
