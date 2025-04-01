import useDeleteCoupon from '@/hooks/useDeleteCoupon'
import ButtonIcon from '@/ui/ButtonIcon'
import Modal from '@/ui/Modal'
import { useRouter } from 'next/navigation'
import  { useState } from 'react'
import { HiTrash } from 'react-icons/hi'

function DeleteCoupon({ coupon }) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const { isPending, mutateAsync } = useDeleteCoupon()
    const handelDelete = (id) => {
        mutateAsync(id, {
            onSuccess: () => {
                router.push("/admin/coupons")
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
                title={coupon.code}
                description={` آیا از حذف ${coupon.code} مطمعن هستید؟`}
            >
                <div className='flex items-center gap-x-2'>
                    <ButtonIcon variant="primary" className="flex-1"
                        onClick={() => setOpen(false)} >لغو
                    </ButtonIcon>

                    <ButtonIcon
                        variant="danger"
                        className="flex-1"
                        onClick={() => handelDelete(coupon._id)}>حذف
                    </ButtonIcon>
                </div>

            </Modal>
        </>
    )
}

export default DeleteCoupon
