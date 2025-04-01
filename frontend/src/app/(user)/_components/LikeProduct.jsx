"use client"

import { getProductByIdApi, likeProductApi } from "@/services/productService";
import PersianNumber from "@/utils/persianNumber";
import { useRouter } from "next/navigation";


import toast from "react-hot-toast";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

function LikeProduct({ product }) {
    const router = useRouter()

    const handlerLike = async (id) => {
        try {
            const { message } = await likeProductApi(id)
            toast.success(message)
            router.refresh()
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <>
            <button className="bg-red-100 w-10 rounded-md gap-x-1 flex items-center absolute top-0 right-0" onClick={() => handlerLike(product._id)}>
                {product?.isLiked ? <IoMdHeart className="text-error w-5 h-5" />
                    : <IoIosHeartEmpty className="text-error w-5 h-5 " />}
                <span className="text-center text-sm">{PersianNumber(product?.likesCount)}</span>
            </button >
        </>
    )
}

export default LikeProduct
