"use client"
import Loading from '@/app/Loading'
import useEditCategory from '@/hooks/useEditCategory'
import RHFSelect from '@/ui/RHFSelect'
import TextField from '@/ui/TextField'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { categoryTypes } from '../../add/page'

function EditCategory({ category }) {
    const router = useRouter()
    const { title, englishTitle, description, type } = category || {}
    let defaultvalue = {}
    if (category) {
        defaultvalue = { title, englishTitle, description, type }
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched",
        defaultValues: defaultvalue,
    })
    const { isPending, mutateAsync } = useEditCategory()
    const onSubmit = (data) => {
        mutateAsync({ id: category._id, data }, {
            onSuccess: () => {
                router.push("/admin/categories")
            },
            onError: () => {
                console.log("error");

            }
        })

    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <TextField name="title" label="عنوان دسته بندی" register={register} required errors={errors} />
                <TextField name="englishTitle" label="عنوان لاتین دسته بندی" register={register} required errors={errors} />
                <RHFSelect label="تایپ"
                    name="type" register={register} required options={categoryTypes} />

                <TextField name="description" label="توضیحات" register={register} required errors={errors} />
                {isPending ? <Loading width="40" /> :
                    <button className="btn btn--primary">تایید</button>
                }
            </form>
        </div>
    )
}

export default EditCategory
