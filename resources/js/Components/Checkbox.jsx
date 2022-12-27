import React from 'react';

export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-primary text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-80"
            onChange={(e) => handleChange(e)}
        />
    );
}
