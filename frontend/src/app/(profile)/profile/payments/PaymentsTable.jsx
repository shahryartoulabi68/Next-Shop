import { tableHeader } from "@/constants/tableHeader"
import PersianNumber from "@/utils/persianNumber"

function PaymentsTable({payments}) {
    return (
        <div className="shadow-md max-h-[420px] overflow-auto">
            <table className="w-full min-w-[800] table-auto text-sm">
                <thead className="font-light ">
                    <tr className="border-b-2 border-b-gray-500 ">
                        {tableHeader.map((item) => {
                            return <th className="  text-start p-1" key={item.id}>{item.label}</th>
                        })
                        }
                    </tr>
                </thead>
                <tbody className="text-sm whitespace-nowrap">

                    {payments?.map((payment, index) => {
                        return <tr key={payment._id} index={index}
                            className="border-b border-b-gray-300 ">
                            <td className="table__td" >{index + 1}</td>
                            <td className="table__td" >{payment.invoiceNumber}</td>
                            <td className="table__td max-w-[240px] truncate">{payment.description}</td>
                            <td className="table__td flex flex-col gap-y-2 items-start">
                                {payment.cart.productDetail.map((i) =>
                                    <div className="badgeTitle" key={i._id} >{i.title}</div>)}
                            </td>
                            <td className="table__td">{PersianNumber(payment.amount)}</td>
                            <td className="table__td">{new Date(payment.createdAt).toLocaleDateString("fa")}</td>
                            <td className="table__td">{payment.status === "COMPLETED" ?
                                <span className="bg-green-600 rounded-2xl px-2 py-.5 text-secondary-0 text-sm">موفق</span>
                                : <span className="bg-red-400 rounded-2xl px-2 py-.5 text-secondary-0 text-sm">ناموفق</span>}
                            </td>
                        </tr>

                    })

                    }

                </tbody>

            </table>
        </div>
    )
}

export default PaymentsTable
