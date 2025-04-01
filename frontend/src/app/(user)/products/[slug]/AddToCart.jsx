"use client"
import Loading from '@/app/Loading'
import { useAddToCart } from '@/hooks/useCart'
import useGetUser from '@/hooks/useGetUser'
import ButtonIcon from '@/ui/ButtonIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

function AddToCart({ product }) {
    const cartId = product._id;
    const productId = { productId: cartId }
    const { user } = useGetUser()
    const router = useRouter()
    const { isPending, mutateAsync } = useAddToCart()


    const isInCart = (user, product) => {
        if (!user) return false;
        return user?.cart?.products.some((p) => p.productId === product._id)
    }


    const handelAddToCart = () => {
        if (!user) {
            toast.error("لطفا ابتدا ثبت نام کنید")
            router.push("/auth")
        } else {
            mutateAsync(productId)
        }
    }

    return (
        <div className='w-full sm:max-w-sm mt-2'>
            {isInCart(user, product) ? <Link href="/cart" className=''>
                <button className='bg-primary-800  text-secondary-0
                 px-2  py-3 rounded-lg hover:bg-primary-600 w-full '>ادامه فرآیند خرید</button>
            </Link> :

                isPending ? <Loading width='30' /> :
                    < ButtonIcon
                        variant="primary"
                        className="font-bold py-3 px-2 "
                        onClick={handelAddToCart} >
                        افزودن به سبد خرید
                    </ButtonIcon >
            }
        </div>

    )
}

export default AddToCart
