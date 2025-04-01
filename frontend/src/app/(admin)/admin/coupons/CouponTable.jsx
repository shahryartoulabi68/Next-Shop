"use client"
import { tableHeaderCoupon } from '@/constants/tableHeader';
import PersianNumber from '@/utils/persianNumber';
import Link from 'next/link';
import { HiPencil } from 'react-icons/hi';
import DeleteCoupon from './DeleteCoupon';

function CouponTable({coupons}) {
    // const { isLoading, coupons } = useGetCoupons()
   

    return (
        <div className="shadow-md max-h-[420px] overflow-auto">
            <table className="w-full min-w-[800] table-auto text-sm">
                <thead className="font-light ">
                    <tr className="border-b-2 border-b-gray-500 ">
                        {tableHeaderCoupon.map((item) => {
                            return <th className="  text-start p-1" key={item.id}>{item.label}</th>
                        })
                        }
                    </tr>
                </thead>
                <tbody className="text-sm whitespace-nowrap">

                    {coupons?.map((coupon, index) => {
                        return <tr key={coupon._id} index={index}
                            className="border-b border-b-gray-300 ">
                            <td className="table__td" >{index + 1}</td>
                            <td className="table__td" >{coupon.code}</td>
                            <td className="table__td ">{coupon.type}</td>
                            <td className="table__td">{PersianNumber(coupon.amount)}</td>
                            <td className="table__td">
                                <span className='badgeTitle'>{coupon.productIds.map((c) => c.title)}</span>
                            </td>
                            <td className="table__td">{PersianNumber(coupon.usageCount)}</td>
                            <td className="table__td">{PersianNumber(coupon.usageLimit)}</td>
                            <td className="table__td">{new Date(coupon.expireDate).toLocaleDateString("fa")}</td>
                            <td >
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <DeleteCoupon coupon={coupon} />
                                    <Link href={`/admin/coupons/add`}>
                                        <HiPencil className='text-green-700 icon' />
                                    </Link>
                                </div>
                            </td>
                        </tr>

                    })

                    }

                </tbody>

            </table>
        </div>
    )
}

export default CouponTable
