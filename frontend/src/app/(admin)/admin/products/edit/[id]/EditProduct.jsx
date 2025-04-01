"use client"
import useEditProduct from "@/hooks/useEditProduct";
import { getAllCategoryApi } from "@/services/category";
import RHFSelect from "@/ui/RHFSelect";
import TextField from "@/ui/TextField";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";


function EditProduct({ product }) {

    const router = useRouter()
    const { title, description, slug, imageLink, brand,
        price, discount, offPrice, countInStock, tags: privTags, category } = product || {}
    let defaultValue = {}
    if (product) {
        defaultValue = {
            title, description, slug,
            imageLink, brand,
            price, discount, offPrice, countInStock, category: category._id
        }
    }

    const [tags, setTags] = useState(privTags || []);

    const { data, isLoading } = useQuery({
        queryFn: getAllCategoryApi,
        queryKey: (["category"])
    })
    const { categories } = data || []


    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: defaultValue,
        mode: "onTouched",
    });

    const { isPending, mutateAsync } = useEditProduct()

    const onsubmit = async (data) => {
        const newProduct = { ...data, tags }
        await mutateAsync({ id: product._id, newProduct }, {
            onSuccess: () => {
                router.push("/admin/products")
            }
        })
    }

    return (
        <div>
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

export default EditProduct
