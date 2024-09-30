import React from 'react';

import RightMain from './Components/RightMain';
import Text from './Mini Components/Text';
import SocialIcons from './Mini Components/SocialIcons';

export default function Home() {
    return (
        <div className="h-full bg-gradient-to-tr shadow-r relative rounded-3xl ">
            <RightMain />
            <div className="p-10 pr0 flex flex-col justify-between h-full w-1/2 text-white">
                <p className="text-xl">HI,</p>
                <Text />
                <SocialIcons />
            </div>
        </div>
    );
}
