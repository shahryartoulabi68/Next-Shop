"use client"
import RadioBtn from "@/ui/RadioBtn"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"

const sortList = [
    {
        id: 1,
        value: "earliest",
        label: "قدیمی ترین"
    },
    {
        id: 2,
        value: "latest",
        label: "جدیدترین"
    },
    {
        id: 3,
        value: "popular",
        label: "محبوب ترین"
    },
]

function ProductSort() {
    const [isOpenSort, setIsOpenSort] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const [sort, setSort] = useState(searchParams.get("sort"))

    const sortHandler = (e) => {
        const value = e.target.value
        setSort(value)
        const newParamth = new URLSearchParams(searchParams.toString())
        newParamth.set("sort", value.toString())
        router.push(`${pathname}?${newParamth}`)
    }

    return (
        <div className={`mb-4 flex-1 border-b pb-2 bg-secondary-0 
            p-2  rounded-lg ${isOpenSort ? "" : "h-[40px] overflow-hidden"}`}>
            <div onClick={() => setIsOpenSort(!isOpenSort)}
                className="flex items-center justify-between mb-3">

                <h1 className="text-secondary-800 font-bold mb-1">مرتب سازی</h1>
                <HiChevronDown className={`transition-all duration-500 ${isOpenSort ? "rotate-180" : ""}`} />
            </div>
            <div className={`flex flex-col gap-y-2 border-t-2 py-3 `}>
                {sortList.map((item) => {
                    return <RadioBtn
                        key={item.id}
                        checked={item.value === sort}
                        id={item.id}
                        name="product-sort"
                        label={item.label}
                        value={item.value}
                        onChange={sortHandler}
                    />
                })
                }
            </div>
        </div>
    )
}

export default ProductSort
