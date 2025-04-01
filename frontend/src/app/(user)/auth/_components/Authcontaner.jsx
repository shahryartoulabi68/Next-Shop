"use client"
import React, { useState } from 'react'
import SentOTPform from './SentOTPform'
import CheckOTPform from './CheckOTPform'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { getOTPApi } from '@/services/authUser'

function Authcontaner() {
    const [step, setStep] = useState(1)
    const { register, handleSubmit, getValues } = useForm()
    const { isPending, error, data: otpResponse, mutateAsync } = useMutation({
        mutationFn: getOTPApi,
    })
    const sentOtpHandle = async (data) => {
        try {
            const { message } = await mutateAsync(data)
            toast.success(message)
            setStep(2)
        }
        catch (error) {
            toast.error(error?.response?.data?.message)
        }

    }


    switch (step) {
        case 1:
            return <SentOTPform
                isPending={isPending}
                onSubmit={handleSubmit(sentOtpHandle)}
                setStep={setStep}
                register={register}
            />
        case 2:
            return <CheckOTPform
                otpResponse={otpResponse}
                onReSendOtp={sentOtpHandle}
                phoneNumber={getValues("phoneNumber")}
                onBack={(e) => setStep(1)}
            />
    }

}

export default Authcontaner
