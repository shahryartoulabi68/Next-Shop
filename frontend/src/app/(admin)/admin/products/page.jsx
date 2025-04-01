import { getAllProductApi } from '@/services/productService'
import setCookiesOnReq from '@/utils/setCookiesOnReq'
import { cookies } from 'next/headers'
import queryString from 'query-string'
import React from 'react'
import ProductTable from './productTable'
import Link from 'next/link'
import { HiPlus } from "react-icons/hi"

async function page({ searchParams }) {
    const cookieStore = await cookies()
    const strCookies = setCookiesOnReq(cookieStore)
    const { products } = await getAllProductApi(queryString.stringify(searchParams), strCookies)

    return (
        <div>
            <div className='flex items-center justify-between mb-8'>
                <h1 className='font-bold text-lg'>جدول محصولات</h1>
                <Link href="/admin/products/creat"
                    className="flex justify-self-end items-center 
     gap-x-4 py-3 bg-primary-800 text-secondary-0 px-4 rounded-lg hover:bg-primary-700">
                    <span className="hidden md:block"> اضافه کردن محصول جدید </span>
                    <HiPlus className="w-4 h-4" />
                </Link>


            </div>
            <ProductTable products={products} />
        </div >
    )
}

export default page
