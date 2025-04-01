import Loading from '@/app/Loading';
import { useAddToCart, useremoveFromCart } from '@/hooks/useCart';
import React from 'react'
import { HiMinus, HiPlus, HiTrash } from 'react-icons/hi';
import PersianNumber from '@/utils/persianNumber';

function CartItem({ cartItem }) {


    const { isPending, mutateAsync } = useAddToCart()
    const { isRemive, removeMutate } = useremoveFromCart()

    const handlerAddToCart = (id) => {
        const productId = { productId: id }
        mutateAsync(productId)
    }
    const handlerRemoveCart = (id) => {
        const productId = { productId: id }
        removeMutate(productId)
    }

    return (
        <div className='grid grid-cols-4 bg-secondary-0 rounded-lg mb-3 p-4 shadow-md'>
            <div className='font-bold flex items-center'>{cartItem.title}</div>
            <div>
                {/* <div className='flex items-center gap-x-2'>
                    <span className={cartItem.discount ? "line-through opacity-50" : "font-bold"}>{cartItem.price}</span>
                    {!!cartItem.discount &&
                        <span className='bg-red-500  rounded-xl px-2 
                  py-.5 text-secondary-0 text-sm'>{cartItem.discount} %</span>
                    }
                </div> */}
                <div className=' text-center flex  flex-col items-center gap-y-2'>
                    <div>تعداد : <span className='border rounded-md p-1 
                    inline-block w-7 h-7 text-center
                     text-primary-800'>{isPending || isRemive
                            ? <div><Loading width='14' /> </div> : PersianNumber(cartItem.quantity)}</span>
                    </div>
                    <div>{PersianNumber(cartItem.offPrice * cartItem.quantity)} <span className='text-sm text-secondary-500'>تومان</span></div>
                </div>
            </div>
           {!!cartItem.discount && <div className='flex items-center gap-x-2'>
                <span className={cartItem.discount ? "line-through opacity-50" : "font-bold"}>{PersianNumber(cartItem.price)}</span>
                {
                    <span className='bg-red-500  rounded-xl px-2 
                  py-.5 text-secondary-0 text-sm'>{PersianNumber(cartItem.discount)} %</span>}
            </div>}
            <div className={`${cartItem.discount ? "col-span-1":"col-span-2"} flex  items-center justify-end gap-2 text-error`}>
                <button className='border p-1 rounded-md' onClick={() => handlerAddToCart(cartItem._id)}><HiPlus /></button>
                {
                    cartItem.quantity > 1 ?
                        <button className='border p-1 rounded-md' onClick={() => handlerRemoveCart(cartItem._id)}><HiMinus /></button>
                        :
                        <button className='border p-1 rounded-md' onClick={() => handlerRemoveCart(cartItem._id)}><HiTrash /></button>
                }

            </div>
        </div>
    )
}

export default CartItem
