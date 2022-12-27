import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children, className }) {
    return (
        <div className={`min-h-screen flex flex-col justify-center items-center ` + className}>
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current" />
                </Link>
            </div>

            {children}

        </div>
    );
}
