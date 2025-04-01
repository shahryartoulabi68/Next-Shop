"use client"
import Link from 'next/link'
import CouponTable from './CouponTable'
import { HiPlus } from 'react-icons/hi'
import useGetCoupons from '@/hooks/useGetCoupons'
import Loading from '@/app/Loading'

function CouponPage() {
    // const { coupons } = await getcouponsApi()
    const { isLoading, coupons } = useGetCoupons()

    if (isLoading) return <Loading />
    if (!coupons) return
    return (
        <div>
            <div className='flex items-center justify-between mb-8'>
                <h1 className='font-bold text-secondary-800 text-lg mb-8'>تخفیفات</h1>
                <Link href="/admin/coupons/add
                "
                    className="flex justify-self-end items-center 
     gap-x-4 py-3 bg-primary-800 text-secondary-0 px-4 rounded-lg hover:bg-primary-700">
                    <span className="hidden md:block"> اضافه کردن محصول جدید </span>
                    <HiPlus className="w-4 h-4" />
                </Link>
            </div>
            <CouponTable coupons={coupons} />
        </div>
    )
}

export default CouponPage
