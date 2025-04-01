
import { getCategoryByIdApi } from "@/services/category";
import EditCategory from "./EditCategory";


async function EditPage({ params }) {
    const { id } = params
    const { category } = await getCategoryByIdApi(id)


    return (
        <div>
            <h1 className='font-bold text-lg'>ویرایش دسته بندی</h1>
            <EditCategory category={category} />
        </div>
    )
}

export default EditPage
