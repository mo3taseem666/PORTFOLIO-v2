import React, { useEffect, useRef, useState } from 'react';

export default function LeftMain() {
    return (
        <div className="flex flex-col gap-20">
            <div className=" bg-clip-text bg-gradient-to-r from-red-200 to-red-700 text-transparent">
                <p className=" font-medium text-5xl ">
                    WELCOME TO MY <span className="text-red-700">WORLD</span>
                </p>
                <p className=" font-medium text-3xl my-2">
                    where there is no place for coppying.
                </p>
                <p className=" font-medium text-5xl">
                    ONLY{' '}
                    <span className="bg-clip-text text-transparent text-red-600 ">
                        CREATIVITY
                    </span>
                </p>
            </div>
            <div>
                <p className=" text-red-300 text-xl">
                    let me take you some place where you will love what you see
                    ...
                </p>
                <button className=" px-10 py-4 bg-red-600 mt-5 w-full text-white hover:bg-red-700 duration-200">
                    CLICK ME!
                </button>
            </div>
        </div>
    );
}
