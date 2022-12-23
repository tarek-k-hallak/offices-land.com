import React from 'react'

export default function ContactUs({ children }) {
    return (
        <section className='w-full h-full bg-majorBackground'>
            {children}
        </section>
    )
}


ContactUs.Container = function ContactUsContainer({ children }) {
    return (
        <div className='flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-16 max-w-[1040px] h-full w-[90%] mx-auto py-12'>
            {children}
        </div>
    )
}