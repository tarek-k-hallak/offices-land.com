import { useRef } from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function SlideNav({ children }) {
    return (
        <div className="md:hidden">
            {children}
        </div>
    )
}


SlideNav.Container = function SlideNavContainer({ children, isSlideNavOpened }) {
    return (
        <nav
            className={`flex flex-col justify-between h-screen w-screen fixed right-0 ${isSlideNavOpened ? '' : "translate-x-full"} top-[50px] pb-[50px]
            bg-background transition duration-500 ease-in-out transform`}>
            {children}
        </nav>
    )
}

SlideNav.LoginButton = function SlideNavLoginButton({ URL, children }) {
    return (
        <Link href={URL} className="w-full mb-10">
            <div className='text-sm w-[90%] m-auto py-1 mt-2 rounded-full border-2 border-accent bg-background text-white text-center'>
                {children}
            </div>
        </Link>
    )
}

SlideNav.List = function SlideNavList({ children }) {
    return (
        <ul className='flex flex-col items-end w-full mx-auto mt-6 bg-background rounded-lg'>
            {children}
        </ul>
    )
}

SlideNav.Item = function SlideNavItem({ URL, children }) {
    return (
        <li className='text-sm text-white text-right w-[90%] mx-auto mt-2 pb-2 ease-in-out hover:text-primary border-b-[1px] border-white'>
            <Link href={URL}>
                {children}
            </Link>
        </li>
    )
}

SlideNav.Title = function SlideNavTitle({ children }) {
    return (
        <div className='text-gray-500 font-semibold text-right mr-4 mb-2'>
            {children}
        </div>
    )
}
