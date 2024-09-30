import React from 'react';

export default function Text() {
    return (
        <div className=" bg-clip-text bg-gradient-to-br from-red-200 to-red-700 text-transparent">
            <p className=" font-medium text-5xl ">
                WELCOME TO MY <span className="text-red-700">WORLD!</span>
            </p>
            <p className=" font-medium text-3xl my-2">
                where there is no place for copying.
            </p>
            <p className=" font-medium text-5xl">
                ONLY{' '}
                <span className="bg-clip-text  text-red-600 ">CREATIVITY.</span>
            </p>
        </div>
    );
}
