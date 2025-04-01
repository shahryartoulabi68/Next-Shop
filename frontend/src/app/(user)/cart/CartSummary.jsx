import Loading from '@/app/Loading';
import { paymentCartApi } from '@/services/cartService';
import ButtonIcon from '@/ui/ButtonIcon';
import PersianNumber from '@/utils/persianNumber';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';


function CartSummary({ cartItem }) {
  const queryClient = useQueryClient()
  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: paymentCartApi
  })

  const handelPayment = async () => {
    try {
      const { message } = await mutateAsync()
      toast.success(message)
      queryClient.invalidateQueries(["get-user"])
    }
    catch (error) {
      toast.error(error?.response?.data.message)
    }
  }

  const { payDetail } = cartItem
  return (
    <div className='flex flex-col gap-y-4 border rounded-md bg-secondary-0 p-3 shadow-md'>
      <p>اطلاعات پرداخت</p>
      <div className='flex items-center justify-between'>
        <span>جمع کل :</span>
        <span>{PersianNumber(payDetail?.totalGrossPrice)}<span className='text-sm text-secondary-500'>تومان </span></span>
      </div>
      <div className='flex items-center justify-between text-success'>
        <span>تخفیف :</span>
        <span>{PersianNumber(payDetail?.totalOffAmount)} - <span className='text-sm text-secondary-500'>تومان</span></span>
      </div>
      <div className='flex items-center justify-between font-bold text-secondary-800'>
        <span>مبلغ قابل پرداخت :</span>
        <span>{PersianNumber(payDetail?.totalPrice)} <span className='text-sm text-secondary-500'>تومان</span></span>
      </div>
      {isPending ? <Loading width='35' /> :
        <ButtonIcon variant="primary" className="text-secondary-0" onClick={handelPayment}>ثبت سفارش</ButtonIcon>
      }
    </div>
  )
}

export default CartSummary


