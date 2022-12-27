import React from 'react';

export default function PrimaryButton({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-majorBackground border border-transparent rounded-md font-semibold text-xs text-accent uppercase tracking-widest active:bg-primary transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
