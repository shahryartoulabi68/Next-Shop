import { tableHeaderProducts } from '@/constants/tableHeader'
import PersianNumber from '@/utils/persianNumber'
import Link from 'next/link'
import { HiEye, HiPencil } from 'react-icons/hi'
import DeleteProduct from './DeleteProduct'

function ProductTable({ products }) {



    return (
        <div className="shadow-md max-h-[320px] overflow-auto">
            <table className="w-full min-w-[800] table-auto text-sm ">
                <thead className="font-light whitespace-nowrap">
                    <tr className="border-b-2 border-b-gray-500 ">
                        {tableHeaderProducts.map((item) => {
                            return <th className="  text-start p-1" key={item.id}>{item.label}</th>
                        })
                        }
                    </tr>
                </thead>
                <tbody className="text-sm whitespace-nowrap">

                    {products?.map((product, index) => {
                        return <tr key={product._id} index={index}
                            className="border-b border-b-gray-300 ">
                            <td className="table__td" >{index + 1}</td>
                            <td className="table__td" >{product?.title}</td>
                            <td className="table__td max-w-[240px] truncate">{product.description}</td>
                            <td className="table__td flex flex-col gap-y-2 items-start">{product.countInStock}</td>
                            <td className="table__td">{PersianNumber(product.price)}</td>
                            <td className="table__td">{PersianNumber(product.discount)}</td>
                            <td className="table__td">{PersianNumber(product.offPrice)}</td>
                            <td className="table__td">{product?.category?.title}</td>
                            <td className="table__td flex items-center gap-x-2">
                                <Link href={`/admin/products/${product._id}`}
                                >
                                    <HiEye className='text-primary-900 hover:text-primary-700 icon' />
                                </Link>
                                <DeleteProduct product={product} />
                                <Link href={`/admin/products/edit/${product._id}`}>
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

export default ProductTable
