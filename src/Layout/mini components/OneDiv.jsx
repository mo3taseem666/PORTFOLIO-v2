import React, { useEffect } from 'react';
import { useMyProvider } from '../../../Context/SharedStateContext';

export default function OneDiv({ selected, setSelected, id, text }) {
    const { setPath } = useMyProvider();

    return (
        <div
            onClick={() => {
                setSelected(id);
                setPath(text);
            }}
            id={id}
            className="size-9 flex justify-center items-center cursor-pointer "
        >
            <div className={`size-2 ${selected === id ? 'size-4' : ''} duration-200 rounded-full bg-white`}></div>
        </div>
    );
}
