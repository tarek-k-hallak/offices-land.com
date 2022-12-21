import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import { HeaderContiner, HeroContainer } from '../Containers'

export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-background">
                <HeaderContiner {...props} />
                <HeroContainer slide_id={2} />
            </div>
        </>
    );
}