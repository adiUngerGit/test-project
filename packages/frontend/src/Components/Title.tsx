import React from 'react'
interface TitleProps {
    title: string
   
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
       <div>
        <p className='text-3xl font-bold text-center font-mono p-5 ' >{title}</p>
       </div>
    )
}

export default Title
