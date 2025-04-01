
function RadioBtn({ name, label, value, onChange, id, checked }) {
    return (
        <div className='flex items-center gap-x-2  text-secondary-600'>
            <input
                className='cursor-pointer '
                type="radio"
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

export default RadioBtn
