import React from 'react'
interface InputProps {
    type: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <div className='mb-4 p-2' >
            <input
                type={type}
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            </div>
    )
}

export default InputComponent
