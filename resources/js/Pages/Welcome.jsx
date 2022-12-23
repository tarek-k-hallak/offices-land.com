import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import { HeaderContainer, HeroContainer, FooterContainer } from '../Containers'
import ContactUsContainer from '@/Containers/ContactUsContainer';

export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-minorBackground">
                <HeaderContainer {...props} />
                <HeroContainer slide_id={2} />
                <ContactUsContainer/>
                <FooterContainer />
            </div>
        </>
    );
}