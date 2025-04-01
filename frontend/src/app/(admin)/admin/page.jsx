import PersianNumber from "@/utils/persianNumber"
import { CiWallet } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi"
import { AiOutlineAppstore } from "react-icons/ai";
import { getAllUserApi, getPaymentListApi } from "@/services/adminService";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { cookies } from "next/headers";
import { getAllProductApi } from "@/services/productService";

async function AdminPage() {
    const cookieStore = await cookies()
    const strCookies = setCookiesOnReq(cookieStore)
    const getUsers = await getAllUserApi("", strCookies)
    const getProducts = await getAllProductApi("", strCookies)
    const getPayments = await getPaymentListApi(strCookies)
    const [{ users }, { products }, { payments }] = await Promise.all([getUsers, getProducts, getPayments])

    let sumAmount = 0
    if (payments) {
        payments?.forEach(p => {
            sumAmount += p.amount
        });
    }

    const multiData = [
        {
            id: 1,
            title: "تعداد کاربران",
            Icon: <HiOutlineUserGroup className="w-16 h-16 text-primary-600" />,
            length: users?.length
        },
        {
            id: 2,
            title: "تعداد محصولات",
            Icon: <AiOutlineAppstore className="w-16 h-16 text-orange-500" />,
            length: products?.length
        },
        {
            id: 3,
            title: "فروش",
            Icon: <CiWallet className="w-16 h-16 text-green-500" />,
            length: sumAmount
        }
    ]


    return (
        <div className="">

            <h1 className="font-bold text-lg text-secondary-800 mb-8">خلاصه آمار</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">

                {multiData.map((item) => {
                    return <div key={item.id} className="bg-primary-100 p-2 rounded-lg flex flex-1 items-center gap-2">
                        <div className="bg-secondary-0 p-2 rounded-xl">
                            {item.Icon}
                        </div>
                        <div className="flex-1 flex flex-col justify-between gap-y-2 p-2 gap-2">
                            <p className="font-bold text-secondary-500">{item.title}</p>
                            <span className="font-bold">{PersianNumber(item.length)}</span>
                        </div>
                    </div>
                })

                }

            </div>
        </div>
    )
}

export default AdminPage