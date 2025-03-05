import React from 'react'
import { IoMdCode } from "react-icons/io";

type Props = {
  icon: React.ElementType;
  title:string;
  description:string;
}

const Card = ({icon:Icon, title, description}: Props) => {
  return (
    <div className='text-[#c4cfde] w-[400px] h-[300px] hover:bg-[#191b1e] transition-all duration-700 shadow-skill-card flex flex-col gap-5 py-6 px-10 rounded-lg'>
        <div className='text-[48px]'>
        <Icon className='text-[#ff014f]' />
        </div>
        <div>
            <h1 className='text-3xl'>{title}</h1>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card