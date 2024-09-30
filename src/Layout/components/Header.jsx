import React, { useState } from 'react';
import MyName from '../mini components/MyName';

export default function Header() {
    return (
        <header className="flex self-start items-center text-white justify-between">
            <MyName />
        </header>
    );
}
