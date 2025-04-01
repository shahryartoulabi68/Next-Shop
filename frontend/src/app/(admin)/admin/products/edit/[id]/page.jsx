
import { getProductByIdApi } from "@/services/productService"
import EditProduct from "./EditProduct";




async function Page({ params }) {
    const { id } = params
    const { product } = await getProductByIdApi(id)



    return (
        <div>
            <h1 className='font-bold text-lg'>ویرایش محصول</h1>
            <EditProduct product={product} />
        </div>
    )
}

export default Page
