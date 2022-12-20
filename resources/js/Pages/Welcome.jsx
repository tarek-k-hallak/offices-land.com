import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import { HeaderContiner } from '../Containers'

export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen">
                <HeaderContiner {...props} />
            </div>
        </>
    );
}