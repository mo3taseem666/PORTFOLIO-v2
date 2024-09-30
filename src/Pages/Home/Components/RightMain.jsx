import React from 'react';
import pic1 from '../../../assets/imgs/pic.png';

export default function RightMain() {
    return (
        <img
            className="absolute brightness-50 w-[750px] bottom-0 filter saturate-100 -right-20"
            src={pic1}
            alt="pic"
        />
    );
}
