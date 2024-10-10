import React from "react"

interface FormProps {
    children: React.ReactNode
}

const Form: React.FC<FormProps> = ({ children }) => {
    return (
        <form className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg ">
            {children}
        </form>
    )
}

export default Form