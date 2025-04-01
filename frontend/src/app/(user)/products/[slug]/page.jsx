import { getAllProductApi, getProductBySlugApi } from '@/services/productService'
import AddToCart from './AddToCart';
import PersianNumber from '@/utils/persianNumber';
import iphone16 from "@/public/img/iphone.png"
import Image from 'next/image';
import { HiDesktopComputer, HiTicket } from 'react-icons/hi';
import { LuCar } from "react-icons/lu";

// export const dynamic = "force-static"
export const dynamicParams = true
async function page({ params }) {
    const { slug } = params
    const { product } = await getProductBySlugApi(slug)


    return (
        <>
            <div className='grid grid-cols-5'>
                <div className="relative aspect-square border-b col-span-5 md:col-span-2 border rounded-lg">
                    <Image
                        src={iphone16}
                        fill
                        alt="iphone"
                        className="object-cover"
                        quality={100}
                        style={{
                            width: "100%",
                            height: "100%"
                        }} />
                </div>
                <div className='p-4 col-span-5 md:col-span-3 lg:col-span-2'>

                    <span className='block text-secondary-800 text-sm'>با سلام این یک توضیح تستی است و هیچ گونه ارزش دیگر ندارد</span>
                    <span className='text-secondary-400'>برند</span>

                </div>

                <div className='col-span-5 lg:col-span-1'>
                    <div className=' border rounded-lg p-4'>
                        <div className='hidden  bg-primary-100 lg:flex  rounded-md p-2 border border-b'>
                            <div className=' '>
                                {!!product.discount ? <div className='bg-red-500  rounded-xl px-2 py-.5 text-secondary-0 
                            text-sm'>{PersianNumber(product.discount)} %</div> : ""}
                            </div>
                            <div className=' flex flex-1 justify-end'>
                                <div className=' flex flex-col justify-end items-end'>
                                    {!!product.discount ? <span className='block'>{PersianNumber(product.offPrice)} </span> :
                                        ""
                                    }
                                    <span className={product.discount ? "line-through opacity-50" : "font-bold"}>{PersianNumber(product.price)}</span>
                                </div>
                                <span className={`text-[12px] text-secondary-600 mr-1`}>تومان</span>
                            </div>
                        </div>
                        <div className='border-b py-4 flex items-center'>
                            <span>{<HiDesktopComputer className='icon' />}</span>
                            <span className='text-sm text-secondary-500'>گارانتی سلامت فیزیکی کالا</span>
                        </div>
                        <div className='lg:border-b py-4 flex-col space-y-3'>
                            <div>
                                نوع ارسال
                            </div>
                            <div className='flex items-center justify-between text-secondary-500'>
                                <div className='flex items-center gap-2'>
                                    <span ><LuCar className='icon' /> </span>
                                    <span>عادی</span>
                                </div>
                                <span className='bg-stone-200 p-1 text-sm rounded-md'>3 تا 5 روز کاری</span>
                            </div>
                        </div>

                        <div className='hidden lg:block'>
                            <AddToCart product={product} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='lg:hidden fixed z-20 container bg-secondary-0  bottom-0 left-0 right-0 p-2 shadow-lg'>
                <div className='flex items-center  gap-x-4'>
                    <div>
                        <AddToCart product={product} />
                    </div>
                    <div className='flex flex-1 gap-x-1 justify-end '>

                        <div className=' flex  justify-end'>
                            <div className=' flex flex-col justify-end items-end'>
                                <span className={product.discount ? "line-through opacity-50" : "font-bold"}>{PersianNumber(product.price)}</span>
                                {!!product.discount ? <span className='block'>{PersianNumber(product.offPrice)} </span> :
                                    ""
                                }
                            </div>
                        </div>
                        <div className=''>

                            {!!product.discount ? <div className='bg-red-500  rounded-xl px-2 py-.5 text-secondary-0 
                                text-sm'>{PersianNumber(product.discount)} %</div> : ""}
                            <span className={`text-[12px] text-secondary-600 mr-1`}>تومان</span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

export async function generateStaticParams() {
    const { products } = await getAllProductApi()

    return products?.map((product) => ({
        slug: product.slug,
    }))
}


{/* <span className='font-bold text-lg'>{PersianNumber(product.title)}</span>
<span>{PersianNumber(product.description)}</span>
<span>قیمت محصول :
    <span className={product.discount ? "line-through opacity-50" : "font-bold"}>{PersianNumber(product.price)}</span>
</span>
{!!product.discount && <div className='flex items-center gap-x-2'>
    <span>قیمت با تخفیف :
        <span>{PersianNumber(product.offPrice)}</span>
    </span>
    <div className='bg-red-500  rounded-xl px-2 py-.5 text-secondary-0 text-sm'>{PersianNumber(product.discount)} %</div>
</div>
} */}