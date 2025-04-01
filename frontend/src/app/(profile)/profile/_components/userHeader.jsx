"use client"
import Drawer from '@/ui/Drawer'
import Image from 'next/image'
import Link from 'next/link'
import ee from "@/public/img/ee.png"
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import ButtonIcon from '@/ui/ButtonIcon'
import SidBar from './SidBar'
import { useState } from 'react'
import useGetUser from '@/hooks/useGetUser'

function UserHeader() {
    const [open, setOpen] = useState(false)
    const { user, data, isLoading } = useGetUser()
    return (
        <div className='mt-4 flex gap-x-4 items-center pr-2 pb-2 shadow-md'>
            <button onClick={() => setOpen(!open)}>
                <HiOutlineMenu className='icon' />
            </button>
            <div className='text-[.7rem] flex pl-4 items-center justify-between flex-1'>
                <h1 className="">سلام ; {user?.name} </h1>
                <span >تاریخ پیوستن :{new Date(user?.createdAt).toLocaleDateString("fa-ir")}</span>
            </div>
            <Drawer onClose={() => setOpen(false)} open={open}>
                <div className='h-screen overflow-hidden p-2'>
                    <div className="flex items-center mt-2 justify-between border-b  border-b-secondary-200 pb-2 mb-6">
                        <Link
                            href="/"
                            className="flex items-center gap-x-4 justify-center text-secondary-700  "
                        >
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
                        <ButtonIcon onClick={() => setOpen(false)} variant="outlain" className="block lg:hidden">
                            <HiX className="w-6 h-6 text-primary-500" />
                        </ButtonIcon>
                    </div>
                    <SidBar onClose={() => setOpen(false)}/>
                </div>
            </Drawer>
        </div>
    )
}

export default UserHeader
