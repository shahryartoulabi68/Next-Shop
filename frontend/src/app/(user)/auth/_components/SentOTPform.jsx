import Loading from '@/app/Loading'
import TextField from '@/ui/TextField'
import React from 'react'

function SentOTPform({ onSubmit, isPending, register }) {
    return (
        <div className='flex items-center justify-center'>
            <form className='space-y-8 form' action="" onSubmit={onSubmit}>
                <TextField
                    label="شماره مبایل"
                    name="phoneNumber"
                    register={register}

                />
                <div className='text-center'>{isPending ? <Loading /> :
                    <button type="onsubmit" className='btn btn--primary w-full'>
                        ارسال کد تایید
                    </button>}
                </div>
            </form>
        </div>
    )
}

export default SentOTPform
