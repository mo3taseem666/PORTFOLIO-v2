import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function SocialIcons() {
    return (
        <div className="flex gap-5">
            <GitHubIcon
                sx={{ fontSize: '22px' }}
                className="cursor-pointer hover:text-slate-400"
            />
            <LinkedInIcon
                sx={{ fontSize: '22px' }}
                className="cursor-pointer hover:text-[#486aff]"
            />
            <WhatsAppIcon
                sx={{ fontSize: '22px' }}
                className="cursor-pointer hover:text-green-400"
            />
            <FacebookIcon
                sx={{ fontSize: '22px' }}
                className="cursor-pointer hover:text-[#1877F2]"
            />
        </div>
    );
}
