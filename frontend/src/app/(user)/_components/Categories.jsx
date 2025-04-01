"use client"

import Loading from "@/app/Loading"
import CheckBox from "@/ui/CheckBox"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"

function CategoryList({ categories }) {
    const [isOpenCategory, setIsOpenCategory] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const [categoryValues, setCategoryValues] = useState(searchParams?.get("category")?.split(",") || [])

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const categoryHandler = (e) => {
        const value = e.target.value
        if (categoryValues.includes(value)) {
            const categories = categoryValues.filter((c) => c !== value)
            setCategoryValues(categories)
            // const newParams = new URLSearchParams(searchParams.toString())
            // newParams.set("category", categories.toString())
            // createQueryString("category", categories)
            router.push(`${pathname}?${createQueryString("category", categories)}`)

        } else {
            setCategoryValues([...categoryValues, value])
            // const newParams = new URLSearchParams(searchParams.toString())
            // newParams.set("category", [...categoryValues, value].toString())
            // createQueryString("category", [...categoryValues, value])

            router.push(`${pathname}?${createQueryString("category", [...categoryValues, value])}`)
        }
    }
    return (
        <div className={`mb-4 flex-1 border-b pb-2 bg-secondary-0 transition-all duration-500
        p-2 rounded-lg ${isOpenCategory ? "" : "h-[40px] overflow-hidden"}`}>
            <div onClick={() => setIsOpenCategory(!isOpenCategory)}
                className="flex items-center justify-between mb-3">
                <h2 className="text-secondary-800 font-bold mb-1 ">دسته بندی ها</h2>
                <HiChevronDown className={`transition-all duration-500 ${isOpenCategory ? "rotate-180":""}`} />
            </div>
            <ul className={`flex flex-col gap-y-2 border-t-2 py-3 
                text-secondary-600  `}>
                {
                    categories?.map((item) => {

                        return <CheckBox
                            key={item._id}
                            label={item.title}
                            id={item._id}
                            checked={categoryValues.includes(item.englishTitle)}
                            name="category-ckeck"
                            value={item.englishTitle}
                            onChange={categoryHandler}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default CategoryList


