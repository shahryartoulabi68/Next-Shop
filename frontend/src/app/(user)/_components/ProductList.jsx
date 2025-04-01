import Link from "next/link"
import AddToCart from "../products/[slug]/AddToCart"
import PersianNumber from "@/utils/persianNumber"
import LikeProduct from "./LikeProduct"
import Image from "next/image"
import iphone16 from "@/public/img/iphone.png"


async function ProductList({ products }) {




    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-4 '>
            {products?.map((product) => {
                return <div key={product._id} className="relative border rounded-md bg-secondary-0">
                    <Link href={`products/${product.slug}`}>
                        <div className="relative aspect-square border-b">
                            <Image
                                src={iphone16}
                                fill
                                alt="iphone"
                                className="object-cover"
                                quality={100}
                                style={{
                                    width: "100%",

                                }} />
                        </div>
                    </Link>

                    <div className="flex flex-col p-2">

                        <div className="flex items-center justify-between">
                            <div className="flex-col items-center justify-between">
                                <span className="font-bold block">{product.title}</span>
                                <span className={product?.discount ? "line-through opacity-50" : "font-bold"}> {PersianNumber(product.price)}
                                    <span className={`text-[12px] text-secondary-600 ${product?.discount && "hidden"}`}>تومان</span>
                                </span>
                            </div>
                            {!!product.discount && <div className='flex-col items-center gap-y-2'>
                                <span className='bg-red-500  rounded-xl px-2 py-.5 text-secondary-0 text-sm'>{PersianNumber(product.discount)} %</span>
                                <span className="block">{PersianNumber(product.offPrice)}
                                    <span className={`text-[12px] text-secondary-600 `}>تومان</span>
                                </span>
                            </div>
                            }
                        </div>


                        <AddToCart product={product} />
                        <LikeProduct product={product} />
                    </div>
                </div>
            })}
        </div >
    )
}

export default ProductList


//     < span key = { product._id }
// className = "flex flex-col  gap-y-2 p-2 border shadow-lg rounded-lg" >
//                     <span className="font-bold">{product.title}</span>
//                     <span> قیمت :{PersianNumber(product.price)}</span>
//                     <span>دسته بندی :{product.category.title}</span>
//                     <Link href={`products/${product.slug}`}>
//                         <span className="font-bold text-primary-700">مشاهده محصول </span>
//                     </Link>
//                     <AddToCart product={product} />
//                     <LikeProduct product={product} />
//                 </span >