import { Link } from '@inertiajs/inertia-react'
import { useRef } from 'react'

import Logo from '../../../images/logo.png'

export default function NavBar({ children }) {
    return (
        <div className='mx-auto max-w-[1240px]'>
            {children}
        </div>
    )
}

NavBar.Container = function NavBarContainer({ children }) {
    return (
        <nav className='flex flex-row-reverse justify-between md:justify-start items-center h-[55px] md:h-[65px] lg:h-[75px] mx-4'>
            {children}
        </nav>
    )
}


NavBar.Logo = function NavBarLogo({ URL }) {
    return (
        <Link href={URL} >
            <div className='flex flex-row items-center'>
                <img className="w-10 md:w-12 lg:w-14 md:ml-6 mr-2 "
                    src={Logo}
                    alt="STGO">
                </img>
                <div className='flex flex-col items-center'>
                    <p className='text-xl text-primary font-bold uppercase'> Offices Land</p>
                    <p className='hidden md:block text-xs text-accent font-semibold uppercase'>Your first choice</p>
                </div>
            </div >
        </Link>
    )
}

NavBar.List = function NavBarList({ children }) {
    return (
        <ul className='hidden md:flex flex-row-reverse gap-4'>
            {children}
        </ul>
    )
}

NavBar.Item = function NavBarItem({ URL, children }) {
    return (
        <li className='font-semibold text-sm lg:text-base transition duration-150 text-accent hover:text-primary cursor-pointer'>
            <Link href={URL} >
                {children}
            </Link>
        </li>
    )
}

// NavBar.Search = function NavBarSearch() {
//     return (
//         <div className='md:ml-4 mr-0 md:mr-auto cursor-pointer'>
//             <GoSearch className='fill-white hover:fill-hover text-xl' />
//         </div>
//     )
// }

NavBar.LoginButton = function NavBarLoginButton({ URL, children }) {
    return (
        <div className='hidden md:block md:mr-auto font-semibold text-sm lg:text-base transition duration-150 text-accent hover:text-primary'>
            <Link href={URL}>
                {children}
            </Link>
        </div>
    )
}

NavBar.RegisterButton = function NavBarRegisterButton({ URL, children }) {
    return (
        <div className='hidden md:block ml-4 items-end text-base transition duration-300 text-accent  hover:text-primary'>
            <Link href={URL}>
                {children}
            </Link>
        </div>
    )
}

NavBar.DashboardButton = function NavBarDashboardButton({ URL, children }) {
    return (
        <div className='hidden md:block ml-4 items-end text-base transition duration-300 text-white  hover:text-hover'>
            <Link href={URL}>
                {children}
            </Link>
        </div>
    )
}

NavBar.Hamburger = function NavBarHamburger({ children, isSlideNavOpened, setIsSlideNavOpened }) {
    const sliceRef1 = useRef(null)
    const sliceRef2 = useRef(null)
    const sliceRef3 = useRef(null)

    function hamburgerAnimation() {
        if (!isSlideNavOpened) {
            sliceRef1.current.classList.add("opacity-80", "rotate-45", "translate-y-2", "bg-primary")
            sliceRef2.current.classList.add("opacity-0")
            sliceRef3.current.classList.add("opacity-80", "-rotate-45", "-translate-y-2", "bg-primary")
        }
        else {
            sliceRef1.current.classList.remove("opacity-80", "rotate-45", "translate-y-2", "bg-primary")
            sliceRef2.current.classList.remove("opacity-0")
            sliceRef3.current.classList.remove("opacity-80", "-rotate-45", "-translate-y-2", "bg-primary")
        }
        setIsSlideNavOpened(!isSlideNavOpened)
    }

    return (
        <button className='md:hidden w-6 h-5 flex flex-col justify-between cursor-pointer'
            onClick={() => hamburgerAnimation()}>
            <div ref={sliceRef1} className='w-full h-1 bg-accent rounded-full transition duration-500 ease-in-out'></div>
            <div ref={sliceRef2} className='w-full h-1 bg-accent rounded-full transition duration-500 ease-in-out'></div>
            <div ref={sliceRef3} className='w-full h-1 bg-accent rounded-full transition duration-500 ease-in-out'></div>
        </button>
    )
}