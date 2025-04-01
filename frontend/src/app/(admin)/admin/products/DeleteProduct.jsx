"use client"
import Loading from '@/app/Loading'
import useDeleteProduct from '@/hooks/useDeleteProduct'
import ButtonIcon from '@/ui/ButtonIcon'
import Modal from '@/ui/Modal'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { HiTrash } from 'react-icons/hi'

function DeleteProduct({ product }) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const { isPending, mutateAsync } = useDeleteProduct()

    const handelDelete = (id) => {

        mutateAsync(id, {
            onSuccess: () => {
                router.refresh("/")
                setOpen(false)
            }
        })
    }

    return (
        <>
            <button onClick={() => setOpen(true)}>
                <HiTrash
                    className='text-rose-700  icon' />
            </button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title={product.title}
                description={` آیا از حذف ${product.title} مطمعن هستید؟`}
            >
                <div className='flex items-center gap-x-2'>
                    <ButtonIcon variant="primary" className="flex-1"
                        onClick={() => setOpen(false)} >لغو
                    </ButtonIcon>
                    {isPending ? <Loading /> :
                        <ButtonIcon
                            variant="danger"
                            className="flex-1"
                            onClick={() => handelDelete(product._id)}>حذف
                        </ButtonIcon>

                    }

                </div>

            </Modal>
        </>
    )
}

export default DeleteProduct
