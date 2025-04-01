"use client"
import creatProduct from "@/hooks/creatProduct";
import { getAllCategoryApi } from "@/services/category";
import { creatProductApi } from "@/services/productService";
import RHFSelect from "@/ui/RHFSelect";
import TextField from "@/ui/TextField"
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { TagsInput } from "react-tag-input-component";


function CteatProduct() {
    const [tags, setTags] = useState([]);

    const { data, isLoading } = useQuery({
        queryFn: getAllCategoryApi,
        queryKey: (["category"])
    })
    const { categories } = data || []

    const { isPending, mutateAsync } = creatProduct()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onsubmit = (data) => {
        const newProduct = { ...data, tags }
        mutateAsync(newProduct, {
            onSuccess: () => {
                reset()
            }
        })
    }

    return (
        <div >
            <h1 className='font-bold text-lg mb-8'> ایجاد محصول جدید</h1>

            <form onSubmit={handleSubmit(onsubmit)} className="form ">
                <TextField name="title" label="عنوان محصول" register={register} required errors={errors} />
                <TextField name="description" label="توضیحات" register={register} required errors={errors} />
                <TextField name="slug" label="اسلاگ" register={register} required errors={errors} />
                <div>
                    <label className="mb-2 block text-secondary-700">تگ</label>
                    <TagsInput name="tags" value={tags} onChange={setTags} />
                </div>
                <TextField name="imageLink" label="عکس" register={register} required errors={errors} />
                <TextField name="brand" label="برند محصول" register={register} required errors={errors} />
                <TextField name="price" label="قیمت محصول" register={register} required errors={errors} />
                <TextField name="discount" label="درصد تخفیف" register={register} required errors={errors} />
                <TextField name="offPrice" label="قیمت با تخفیف" register={register} required errors={errors} />
                <TextField name="countInStock" label="تعداد " register={register} required errors={errors} />
                <RHFSelect label="دسته بندی" name="category" register={register} required options={categories} />
                <button className="btn btn--primary">تایید</button>
            </form>

        </div>
    )
}

export default CteatProduct
