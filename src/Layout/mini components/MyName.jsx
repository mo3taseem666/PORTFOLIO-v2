import React, { useRef } from 'react';

export default function MyName() {
    const spanRef = useRef();

    return (
        <div>
            <p className="text-2xl w-[168px] cursor-default font-medium tracking-wider">
                <span ref={spanRef} className="text-red-500">
                    MO3
                </span>
                TASEEM
            </p>
        </div>
    );
}
