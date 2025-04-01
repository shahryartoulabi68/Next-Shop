import React from 'react'

function TextField({ label, name, register, type = "text", required, validationSchema, errors }) {
    return (
        <div className='space-y-2'>
            <label htmlFor={name} className='mt-4 block text-secondary-900'>
                {label} {required && <span className='text-error'>*</span>}

            </label>
            <input
                {...register(name, validationSchema)}
                className='textField__input text-secondary-800'
                type={type}
                id={name}
                name={name}
                autoComplete='off'
            />
            {errors && errors[name] && (
                <span className='text-error text-sm block mb-2'>{errors[name]?.message}</span>
            )}
        </div>
    )
}

export default TextField
