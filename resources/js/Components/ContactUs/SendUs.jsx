import React from 'react'

export default function SendUs({ children }) {
    return (
        <div className='w-full h-full'>
            {children}
        </div>
    )
}

SendUs.Container = function SendUsContainer({ children }) {
    return (
        <div className='flex flex-col justify-between'>
            {children}
        </div>
    )
}

SendUs.Form = function SendUsForm({ children, onSubmit }) {

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            {children}
        </form>
    )
}

SendUs.Name = function SendUsName({ type, name, value, placeholder }) {
    return (
        <input className='w-full mb-4 h-10 p-2 rounded-lg text-sm lg:text-lg text-left'
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} />
    )
}

SendUs.Email = function SendUsName({ type, name, value, placeholder }) {
    return (
        <input className='w-full mb-4 h-10 p-2 rounded-lg text-sm lg:text-lg text-left'
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} />
    )
}

SendUs.Message = function SendUsMessage({ type, name, value, placeholder }) {
    return (
        <textarea className='w-full mb-4 h-40 p-2 rounded-lg text-sm lg:text-lg text-left'
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} />
    )
}

SendUs.Submit = function SendUsSubmit({ type, children }) {
    return (
        <button className='font-semibold text-sm md:text-base w-[125px] md:w-[140px] h-[30px] lg:h-[35px] rounded-full text-minorBackground bg-accent hover:opacity-80 transition duration-300 mx-auto'
            type={type}>
            {children}
        </button>
    )
}