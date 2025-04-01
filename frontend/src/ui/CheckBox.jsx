import React from 'react'

function CheckBox({ name, label, value, onChange, id, checked }) {
    return (
        <div className='flex items-center gap-x-1 '>
            <input
                className='cursor-pointer'
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                id={id}
                checked={checked}
            />
            <label htmlFor={id} className='cursor-pointer'>{label}</label>

        </div>
    )
}

export default CheckBox
