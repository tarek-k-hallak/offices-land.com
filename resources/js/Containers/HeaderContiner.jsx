import React, { useRef, useState } from 'react'
import { NavBar, SlideNav, Header } from '../Components'

export default function HeaderContainer(props) {
    const [isSlideNavOpened, setIsSlideNavOpened] = useState(false)

    return (
        <Header>
            <Header.Container>
                <NavBar>
                    <NavBar.Container>
                        <NavBar.Hamburger
                            isSlideNavOpened={isSlideNavOpened}
                            setIsSlideNavOpened={setIsSlideNavOpened}
                        />
                        <NavBar.Logo />
                        <NavBar.List>
                            <NavBar.Item URL={'/'}>الرئيسية</NavBar.Item>
                            <NavBar.Item URL={'/about'}>عن الشركة</NavBar.Item>
                            <NavBar.Item URL={'/products'}>المنتجات</NavBar.Item>
                            <NavBar.Item URL={'/catalog'}>الكتالوج</NavBar.Item>
                            <NavBar.Item URL={'/contact'}>اتصل بنا</NavBar.Item>
                        </NavBar.List>
                        {props.auth.user
                            ?
                            <NavBar.DashboardButton URL={route('dashboard')}>
                                لوحة التحكم
                            </NavBar.DashboardButton>
                            :
                            <NavBar.LoginButton URL={route('dashboard')}>
                                تسجيل الدخول
                            </NavBar.LoginButton>
                        }
                    </NavBar.Container>
                </NavBar>
                <SlideNav>
                    <SlideNav.Container isSlideNavOpened={isSlideNavOpened}>
                        <SlideNav.List >
                            <SlideNav.Item URL={'/'}>الرئيسية</SlideNav.Item>
                            <SlideNav.Item URL={'/about'}>عن الشركة</SlideNav.Item>
                            <SlideNav.Item URL={'/products'}>المنتجات</SlideNav.Item>
                            <SlideNav.Item URL={'/catalog'}>الكتالوج</SlideNav.Item>
                            <SlideNav.Item URL={'/contact'}>اتصل بنا</SlideNav.Item>
                        </SlideNav.List>
                        <SlideNav.LoginButton URL={'/login'}>تسجيل الدخول</SlideNav.LoginButton>
                    </SlideNav.Container>
                </SlideNav>
            </Header.Container>
        </Header>
    )
}
