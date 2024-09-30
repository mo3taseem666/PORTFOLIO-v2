import React, { useState } from 'react';
import OneDiv from '../mini components/OneDiv';

export default function ListOfRoutes() {
    const [selected, setSelected] = useState(0);
    const routes = ['WELCOME', 'ABOUT', 'PROJECTS', 'CONTACT ME'];
    return (
        <div className="flex self-center z-40 font-medium text-red-400 gap-5 right-0 flex-col items-end">
            {routes.map((el, idx) => (
                <OneDiv
                    key={idx}
                    id={idx}
                    selected={selected}
                    setSelected={setSelected}
                    text={el}
                />
            ))}
        </div>
    );
}
