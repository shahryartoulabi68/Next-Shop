"use client"
import Link from "next/link"
import CategoryTable from "./categoryTable"
import { HiPlus } from "react-icons/hi"
import useGetAllCategory from "@/hooks/useGetAllCategory"
import Loading from "@/app/Loading"

function CategoryPage() {
    // const { categories } = await getAllCategoryApi()
    const { categories, isLoading } = useGetAllCategory()
    if (isLoading) return <Loading />

    return (
        <div>
            <div className='flex items-center justify-between mb-8'>
                <h1 className='font-bold text-lg'>دسته بندی ها</h1>
                <Link href="/admin/categories/add"
                    className="flex justify-self-end items-center 
                           gap-x-4 py-3 bg-primary-800 text-secondary-0 px-4 
                            rounded-lg hover:bg-primary-700"
                >
                    <span className="hidden md:block"> اضافه کردن دسته بندی جدید </span>
                    <HiPlus className="w-4 h-4" />
                </Link>


            </div>
            <CategoryTable categories={categories} />
        </div>
    )
}

export default CategoryPage
