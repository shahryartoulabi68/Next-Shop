import Loading from "@/app/Loading"
import { checkOTPApi } from "@/services/authUser"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import OTPInput from "react-otp-input"



function CheckOTPform({ phoneNumber, onBack, onReSendOtp, otpResponse }) {


  const [otp, setOtp] = useState("")
  const [time, setTime] = useState(120)

  const router = useRouter()
  const queryClient = useQueryClient()
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOTPApi,
  })

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000)
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [time, setTime])

  const checkOTPhandle = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp }, {
        onSuccess: () => {
          queryClient.invalidateQueries(["get-user"])
        }
      })
      toast.success(message)
      if (!user?.isActive) return router.push("/complete-profile")
      if (user?.isActive) return router.push("/")

      // if (user.status !== 2) {
      //   // navigate("/")
      //   toast.error("پروفایل شما در انتظار تایید است")
      //   return;
      // }
      // if (user.role === "OWNER") return navigate("/owner")
      // if (user.role === "FREELANCER") return navigate("/freelancer")
      // if (user.role === "ADMIN") return navigate("/admin")

    }
    catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (<div className='space-y-4 flex flex-col items-center'>
    <div>
      <button onClick={onBack} className="mb-8">برگشت</button>
      {otpResponse && <p>{otpResponse.message} <button onClick={onBack}>
      </button></p>}
      <div className="mb-4">{time > 0 ?
        (<span>{time} ثانیه تا ارسال مجدد کد </span>
        ) : (<button onClick={onReSendOtp}>ارسال مجدد کد</button>)}
      </div>
      <form action="" className='space-y-10 ' onSubmit={checkOTPhandle}>
        <p className='font-bold text-secondary-800'>کد تایید را وارد نمایید</p>
        <OTPInput value={otp} onChange={setOtp} numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type='number'{...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center "
          inputStyle={{
            width: "2.5rem",
            padding: ".5rem .3rem",
            border: "1px solid rgb(var( --color-primary-300))",
            borderRadius: ".5rem"

          }}
        />
        <div className="text-center ">
          {isPending ? <Loading />
            :
            <button type="onsubmit" className='btn btn--primary w-full'>تایید</button>}
        </div>
      </form>
    </div>

  </div>
  )
}

export default CheckOTPform
