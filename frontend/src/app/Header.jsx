"use client"
import useGetUser from '@/hooks/useGetUser';
import PersianNumber from '@/utils/persianNumber';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import ee from "@/public/img/ee.png"
import Image from 'next/image';
import { HiLogin, HiMenu, HiMenuAlt1, HiMenuAlt4, HiOutlineLogin, HiOutlineMenuAlt1, HiOutlineMenuAlt2 } from 'react-icons/hi';
import Drawer from '@/ui/Drawer';
import SideBar from './SideBar';

function Header() {
    const { data, user, isLoading, error } = useGetUser()
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)


    const cartLength = data?.cart?.payDetail?.productIds.length


    return (
        <header className={`shadow-md mb-4 sticky px-4 transition-all duration-200 ${isLoading ? "blur-md opacity-80" : " opacity-100 blur-none"}`}>
            <nav className=''>
                <ul className='flex items-center justify-between py-2 container xl:max-w-screen-xl'>
                    <div className='flex items-center gap-x-4'>
                        <li className='md:hidden'>
                            <button onClick={() => setIsOpenDrawer(true)}>
                                <HiMenu className='icon' />
                            </button>
                        </li>
                        <li className='py-2 hidden md:block'>
                            <Link href={"/"}>
                                <div className='w-[150px] h-[40px] relative aspect-square '>
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
                            </Link>
                        </li>
                        <li className='py-2 hidden md:block'>
                            <Link href={"/products"}>
                                محصولات
                            </Link>
                        </li>

                        {user && user?.role === "ADMIN" ?
                            <li className='py-2 '>
                                <Link href={"/admin"}>
                                    مدیریت
                                </Link>
                            </li> : ""
                        }
                    </div>

                    <li className='py-2'>
                        <div className='flex items-center gap-x-3'>
                            <Link href="/cart">
                                <div className='relative'>
                                    <IoCartOutline className='w-6 h-6 text-gray-900' />
                                    <span className='absolute -top-3 -right-2 bg-error
                                 w-[20px] h-[20px] text-secondary-0 
                                  rounded-full inline-block text-center'>{PersianNumber(cartLength) || 0}</span>
                                </div>
                            </Link>
                            {user ?
                                <Link href={"/profile"}><span className='text-sm'>{user?.name}</span> </Link> :
                                <Link href={"/auth"} className='bg-primary-600 px-2 py-1 
                                flex items-center gap-x-2 cursor-pointer
                                rounded-xl text-secondary-0 '>
                                    <HiOutlineLogin />
                                    ورود
                                </Link>}
                        </div>
                    </li>

                </ul>
            </nav>
            <Drawer onClose={() => setIsOpenDrawer(false)} open={isOpenDrawer}>
                <SideBar onClose={() => setIsOpenDrawer(false)} />
            </Drawer>
        </header>
    )
}

export default Header
