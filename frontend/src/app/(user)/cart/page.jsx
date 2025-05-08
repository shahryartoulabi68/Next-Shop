"use client"

import Loading from "@/app/Loading";
import useGetUser from "@/hooks/useGetUser"
import Link from "next/link"
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Image from "next/image";
import emptyCart from "@/public/img/emptyCart_p.png"

function CartPage() {
    const { data, user, cart, isLoading } = useGetUser()
    if (isLoading) return <Loading />

    if (!user) return <div className="mt-8">
        <h2 className="text-secondary-800 mb-4">برای دیدن سبد خرید ابتدا باید وارد سایت شوید</h2>
        <Link href="/auth" className="font-bold text-lg text-primary-700">ورود به سایت</Link>
    </div>
    if (user.cart?.products && user.cart?.products.length === 0) return <div >
        <div className="">
            <h2 className="text-secondary-800 mb-4">محصولی در سبد خرید شما وجود ندارد !</h2>
            <Link href="/products" className="font-bold text-lg text-primary-700">رفتن به صفحه محصولات؟</Link>
        </div>
        <div className="aspect-video mb-4 relative w-4/5 md:w-3/5 m-auto">
            <Image
                src={emptyCart}
                fill
                alt="shopmi"
                className="object-cover"
                quality={100}
                style={{
                    width: "100%",

                }}
            />
        </div>
    </div>
    return (
        <div className="flex flex-col md:flex-row px-4  gap-x-8">
            <div className="w-full md:w-3/5   no-scrollbar overflow-y-auto">{
                cart?.productDetail.map((item) => {
                    return <CartItem key={item._id} cartItem={item} />
                })
            }

            </div>
            <div className="w-full md:w-2/5 md:max-w-[300px]">
                <CartSummary key={cart._id} cartItem={cart} />
            </div>

        </div>
    )
}

export default CartPage
