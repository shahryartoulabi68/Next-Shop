"use client"
// import Loading from '@/app/Loading'
import { tableHeaderCategory } from '@/constants/tableHeader'
// import useGetAllCategory from '@/hooks/useGetAllCategory'
import Link from 'next/link'
import  { useState } from 'react'
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi'
import { DeleteCategory } from './add/OperationCategory'

function CategoryTable({categories}) {
    const [open, setOpen] = useState(false)
    // const { categories, isLoading } = useGetAllCategory()



    // if (isLoading) return <Loading />
    return (
        <div className="shadow-md max-h-[420px] overflow-auto">
            <table className="w-full min-w-[800] table-auto text-sm">
                <thead className="font-light ">
                    <tr className="border-b-2 border-b-gray-500 ">
                        {tableHeaderCategory.map((item) => {
                            return <th className="  text-start p-1" key={item.id}>{item.label}</th>
                        })
                        }
                    </tr>
                </thead>
                <tbody className="text-sm whitespace-nowrap">

                    {categories?.map((category, index) => {
                        return <tr key={category._id} index={index}
                            className="border-b border-b-gray-300 ">
                            <td className="table__td" >{index + 1}</td>
                            <td className="table__td" >{category.title}</td>
                            <td className="table__td max-w-[240px] truncate">{category.description}</td>
                            <td className="table__td" >{new Date(category.createdAt).toLocaleDateString("fa")}</td>
                            <td className="table__td" >{new Date(category.updatedAt).toLocaleDateString("fa")}</td>
                            <td className="table__td flex items-center gap-x-2">
                                <Link href={`/admin/users/${category._id}`}
                                >
                                    <HiEye className='text-primary-900 hover:text-primary-700 icon' />
                                </Link>
                                <DeleteCategory category={category} />
                                <Link href={`/admin/categories/edit/${category._id}`}>
                                    <HiPencil className='text-green-700 icon' />
                                </Link>

                            </td>


                        </tr>

                    })

                    }

                </tbody>

            </table>
        </div>
    )
}

export default CategoryTable
