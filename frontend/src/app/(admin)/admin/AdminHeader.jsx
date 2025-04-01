"use client"
import Drawer from '@/ui/Drawer'
import React, { useState } from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import AdminSidBar from './adminSidBar'
import Link from 'next/link'
import Image from 'next/image'
import ee from "@/public/img/ee.png"
import ButtonIcon from '@/ui/ButtonIcon'

function AdminHeader() {
    const [open, setOpen] = useState(false)
    return (
        <div className='mt-4 shadow-md'>
            <button onClick={() => setOpen(!open)}>
                <HiOutlineMenu className='icon' />
            </button>
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
                    <AdminSidBar />
                </div>
            </Drawer>
        </div>
    )
}

export default AdminHeader
