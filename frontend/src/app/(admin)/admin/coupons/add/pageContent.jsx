"use client"

import useGetProducts from "@/hooks/useGetProducts"
import Select from 'react-select';
import TextField from "@/ui/TextField"
import { useRouter, useSearchParams } from "next/navigation"
import queryString from "query-string"
import { useForm } from "react-hook-form"
import { useState } from "react";
import RadioBtn from "@/ui/RadioBtn";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import useAddCoupon from "@/hooks/useAddCoupon";
import Loading from "@/app/Loading";
function PageContent() {
    const router = useRouter()
    const [selectedProduct, setSelectedProduct] = useState([])
    const [expireDate, setExpireDate] = useState(new Date());
    const [type, setType] = useState("percent")
    const  searchParams  = useSearchParams()
    const { isLoading, products } = useGetProducts(queryString.stringify(searchParams))
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    let productIds = []
    selectedProduct.forEach((p) => {
        productIds.push(p._id)
    })
    const { isPending, mutateAsync } = useAddCoupon()

    const onSubmit = (data) => {
        const newCoupon = {
            ...data, productIds, type,
            expireDate: new Date(expireDate).toISOString()
        }
        mutateAsync(newCoupon, {
            onSuccess: () => {
                router.push("/admin/coupons")
            }
        })

    }

    return (
        <div>
            <h1 className='font-bold text-secondary-800 text-lg mb-8'>ایجاد تخفیف</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <TextField name="code" label="کد تخفیف" register={register} required errors={errors} />
                <TextField name="amount" label="مقدار" register={register} required errors={errors} />
                <TextField name="usageLimit" label="ظرفیت" register={register} required errors={errors} />

                <span className="block mt-4">تاریخ انقضاء</span>
                <DatePicker
                    inputClass="textField__input text-secondary-800"
                    value={expireDate}
                    onChange={(date) => setExpireDate(date)}
                    format="YYYY/MM/DD"
                    calendar={persian}
                    locale={persian_fa}
                />

                <div className="flex items-center justify-between">
                    <RadioBtn
                        id="percent-type"
                        name="type"
                        label="درصد"
                        value="percent"
                        onChange={(e) => setType(e.target.value)}
                        checked={type === "percent"}
                    />
                    <RadioBtn
                        id="fixedProduct-type"
                        name="type"
                        label="مقدار ثابت"
                        value="fixedProduct"
                        onChange={(e) => setType(e.target.value)}
                        checked={type === "fixedProduct"}
                    />

                </div>
                <Select

                    placeholder="انتخاب محصولات"
                    isMulti
                    onChange={setSelectedProduct}
                    options={products}
                    getOptionLabel={(products) => products?.title}
                    getOptionValue={(products) => products?._id}
                />
                <div>
                    {isPending ? <Loading width="40" /> :
                        <button className="btn btn--primary mt-3 w-full">تایید</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default PageContent