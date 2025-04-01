"use client"
import Loading from '@/app/Loading'
import { tableHeaderUsers } from '@/constants/tableHeader'
import useGetAllusers from '@/hooks/useGetAllUsers'
import Link from 'next/link'

function UsersTable({ qs }) {


    const { isLoading, users } = useGetAllusers(qs)
    if (isLoading) return <Loading />

    return (
        <div className="shadow-md max-h-[420px] overflow-auto">
            <table className="w-full min-w-[800] table-auto text-sm bg-secondary-0">
                <thead className="font-light ">
                    <tr className="border-b-2 border-b-gray-500 ">
                        {tableHeaderUsers.map((item) => {
                            return <th className="  text-start p-1" key={item.id}>{item.label}</th>
                        })
                        }
                    </tr>
                </thead>
                <tbody className="text-sm whitespace-nowrap">

                    {users?.map((user, index) => {
                        return <tr key={user._id} index={index}
                            className="border-b border-b-gray-300 ">
                            <td className="table__td" >{index + 1}</td>
                            <td className="table__td" >{user.name}</td>
                            <td className="table__td max-w-[240px] truncate">{user.email}</td>
                            <td className="table__td flex flex-col gap-y-2 items-start">{user.phoneNumber}</td>
                            <td className="table__td">{user.Products.slice(0, 3).map((p, index) => {
                                return <span key={index} className='badge badge--secondary'>{p.title}</span>
                            })}</td>

                            <td className="table__td">
                                <Link href={`/admin/users/${user._id}`}
                                    className='text-primary-900 hover:text-primary-700'
                                > جزئیات بیشتر</Link>
                            </td>


                        </tr>

                    })

                    }

                </tbody>

            </table>
        </div>
    )
}

export default UsersTable
