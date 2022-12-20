export default function Header({ children }) {
    return (
        <header className={'z-50 sticky top-0 w-full'}>
            {children}
        </header>
    )
}

Header.Container = function HeaderContainer({ children }) {
    return (
        <div className='bg-background h-[55px] md:h-[65px] lg:h-[75px]'>
            {children}
        </div>
    )
}