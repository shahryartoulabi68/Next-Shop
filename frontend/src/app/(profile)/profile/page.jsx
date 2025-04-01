"use client"

import Loading from "@/app/Loading"
import useGetUser from "@/hooks/useGetUser"
import Link from "next/link"
import PaymentsTable from "./payments/PaymentsTable"

function ProfilePage() {
    const { user, data, isLoading } = useGetUser()
    const { payments } = data || {}
    if (isLoading) return <Loading height="50" width="50" />
    return (
        <div>

            <div className="  mt-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-lg mb-4">آخرین سفارشات کاربر</h2>
                    <Link href="/profile/payments" className="text-primary-700">لیست همه سفارشات</Link>
                </div>
                <PaymentsTable payments={payments.sort((a, b) => new Date(b.createdAt) - new Date(b.createdAt)).slice(0, 3)} />
            </div>


        </div>
    )
}

export default ProfilePage
