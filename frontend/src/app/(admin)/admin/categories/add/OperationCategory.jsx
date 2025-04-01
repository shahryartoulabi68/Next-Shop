import Loading from '@/app/Loading'
import useDeleteCategory from '@/hooks/useDeleteCategory'
import ButtonIcon from '@/ui/ButtonIcon'
import Modal from '@/ui/Modal'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { HiTrash } from 'react-icons/hi'

export function DeleteCategory({ category }) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const { isPending, mutateAsync } = useDeleteCategory()
    const handelDelete = (id) => {

        mutateAsync(id, {
            onSuccess: () => {
                router.refresh("/admin")
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
                title={category.title}
                description={` آیا از حذف ${category.title} مطمعن هستید؟`}
            >
                <div className='flex items-center gap-x-2'>
                    <ButtonIcon variant="primary" className="flex-1"
                        onClick={() => setOpen(false)} >لغو
                    </ButtonIcon>
                    {isPending ? <Loading /> :
                        <ButtonIcon
                            variant="danger"
                            className="flex-1"
                            onClick={() => handelDelete(category._id)}>حذف
                        </ButtonIcon>
                    }

                </div>

            </Modal>
        </>
    )
}




