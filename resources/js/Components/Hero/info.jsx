import { Link } from '@inertiajs/inertia-react'

export default function Info({ children }) {
    return (
        <div className="z-20  w-[40%] mb-4 xl:mb-20 md:mr- 4 lg:mr-8 ">
            {children}
        </div>
    )
}

Info.Container = function InfoContainer({ children }) {
    return (
        <div className="flex flex-col items-end">
            {children}
        </div>
    )
}


Info.Title = function InfoTitle({ children }) {
    return (
        <h1 className="font-bold text-lg md:text-2xl lg:text-4xl text-primary text-right">
            {children}
        </h1>
    )
}

Info.SubTitle = function InfoSubtitle({ children }) {
    return (
        <p className='hidden md:block text-xs md:text-sm lg:text-lg text-right text-accent mt-8'>
            {children}
        </p>
    )
}

Info.Button = function InfoButton({ slide_id, children }) {
    return (
        <Link href={`/products/${slide_id}`}>
            <button className='w-24 h-10 bg-background text-accent rounded-xl mt-4 hover:opacity-50'>
                {children}
            </button>
        </Link>
    )
}