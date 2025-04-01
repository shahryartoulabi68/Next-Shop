"use client"
import { logoutUser } from '@/services/authUser'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlineHome, HiOutlineLogout, HiOutlineUsers } from 'react-icons/hi'
import { RxDashboard } from "react-icons/rx";
import { FaProductHunt } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import ee from "@/public/img/ee.png"
import Image from 'next/image'

const titleSidbar = [
    {
        id: 1,
        title: "صفحه اصلی",
        href: "/",
        icon: <HiOutlineHome />
    },
    {
        id: 2,
        title: "داشبورد",
        href: "/admin",
        icon: <RxDashboard />

    },
    {
        id: 3,
        title: "محصولات",
        href: "/admin/products",
        icon: <FaProductHunt />
    },
    {
        id: 4,
        title: "کاربران",
        href: "/admin/users",
        icon: <HiOutlineUsers />

    },
    {
        id: 5,
        title: "دسته بندی",
        href: "/admin/categories",
        icon: <TbCategoryPlus />

    },
    {
        id: 6,
        title: "سفارشات",
        href: "/admin/payments",
        icon: <MdOutlinePayments />
    },
    {
        id: 7,
        title: "تخفیفات",
        href: "/admin/coupons",
        icon: <CiDiscount1 />
    },
]

function AdminSidBar() {

    const pathname = usePathname()

    const handlerLogout = async () => {
        await logoutUser()
        document.location.href = "/"
    }

    return (
        <div className=''>

            <ul className={`text-sm md:text-[.9rem] space-y-4`}>
                <Link
                    href="/"
                    className={`hidden md:flex whitespace-nowrap text-sm hover:bg-primary-100 rounded-lg 
                    transition-all duration-300  items-center border-b pb-2`}
                > <li>
                        <div className='md:w-[110px] lg:w-[150px] h-[40px] relative aspect-square '>
                            <Image
                                src={ee}
                                fill
                                alt="shopmi"
                                className="object-cover"
                                quality={100}
                                style={{
                                    width: "100%",

                                }} />
                        </div>
                    </li>
                </Link>
                {titleSidbar.map((item) => {
                    return <Link href={item.href} key={item.id} className={`flex whitespace-nowrap text-sm hover:bg-primary-100 rounded-lg 
                    transition-all duration-300  items-center ${item.href === pathname ? " bg-secondary-0 rounded-lg"
                            : ""}`} >
                        <span className='border p-[.2rem] rounded-lg md:text-lg'>{item.icon}</span>
                        <li className='w-full p-2 '>
                            {item.title}
                        </li>
                    </Link >
                })

                }
                <li className='text-error'>
                    <button onClick={handlerLogout}
                        className=' whitespace-nowrap text-sm flex items-center gap-x-2' >
                        <span><HiOutlineLogout className='w-4 h-4' /></span>
                        <span>خروج </span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default AdminSidBar


