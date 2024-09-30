import React, { useEffect, useState } from 'react';
import { useMyProvider } from '../../../Context/SharedStateContext';

export default function Label() {
    const { path } = useMyProvider();

    return (
        <div className="absolute z-10 -bottom-0 text-red-500 opacity-50 -right-0 font-bold tracking-widest text-9xl">
            {path}
        </div>
    );
}
