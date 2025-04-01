"use client"
import { logoutUser } from '@/services/authUser'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HiOutlineHome, HiOutlineLogout } from 'react-icons/hi'
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePayments } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";
import Image from 'next/image'
import ee from "@/public/img/ee.png"

function SidBar({onClose}) {
    const pathname = usePathname()
    const handlerLogout = async () => {
        await logoutUser()
        document.location.href = "/"
    }

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
            href: "/profile",
            icon: <RxDashboard />
        },
        {
            id: 3,
            title: "اطلاعات کاربر",
            href: "/profile/me",
            icon: <FaInfo />
        },
        {
            id: 4,
            title: "سفارشات کاربر",
            href: "/profile/payments",
            icon: <MdOutlinePayments />

        },

    ]

    return (
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
                return <Link href={item.href} onClick={onClose} key={item.id} className={`flex whitespace-nowrap text-sm hover:bg-primary-100 rounded-lg 
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
                    className=' whitespace-nowrap text-sm flex items-center text-error gap-x-2' >
                    <span><HiOutlineLogout className='w-4 h-4' /></span>
                    <span>خروج</span>
                </button>
            </li>
        </ul >
    )
}

export default SidBar
