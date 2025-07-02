import { Box, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { CONFIG } from 'src/global-config';

const icons = [
    {
        svg: (
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path
                    d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.87.56A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 1.5 12a28.6 28.6 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.94C5.8 18.5 12 18.5 12 18.5s6.2 0 7.87-.56a2.75 2.75 0 0 0 1.93-1.94A28.6 28.6 0 0 0 22.5 12a28.6 28.6 0 0 0-.7-3.999ZM10 15.5v-7l6 3.5-6 3.5Z"
                    fill="currentColor"
                />
            </svg>
        ),
        href: "https://www.youtube.com/@IITJSC",
        bgcolor: "error.main",
    },
    {
        svg: (
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path
                    d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12Z"
                    fill="currentColor"
                />
            </svg>
        ),
        href: "https://www.facebook.com/iitmekong",
        bgcolor: "#1877F3",
    },
    {
        svg: (
            <Box
                component="img"
                src={`${CONFIG.assetsDir}/assets/icons/apps/ic-zalo.svg`}
                alt="Zalo"
                sx={{ width: 24, height: 24 }}
            />
        ),
        href: "https://zalo.me/(+84)368909968",
        bgcolor: "#1877F3",
    },
];

const SocialPopin = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
    @keyframes slideInRight {
      0% { opacity: 0; transform: translateX(40px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    @keyframes pulseGlow {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0px rgba(255, 255, 255, 0.6);
      }
      50% {
        transform: scale(1.1);
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
      }
    }
  `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                right: 24,
                bottom: '20%',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                zIndex: 1000,
            }}
        >
            {icons.map((icon, idx) => (
                <IconButton
                    key={idx}
                    component="a"
                    href={icon.href}
                    target="_blank"
                    rel="noopener"
                    sx={{
                        color: 'common.white',
                        bgcolor: icon.bgcolor,
                        '&:hover': { bgcolor: 'error.dark' },
                        opacity: 0,
                        transform: 'translateX(40px)',
                        animation: `slideInRight 0.5s ease-out ${idx * 0.1}s forwards, pulseGlow 2s ease-in-out ${0.4 + idx * 0.1}s infinite`,
                    }}
                >
                    {icon.svg}
                </IconButton>
            ))}
        </div>
    );
};

export default SocialPopin;
