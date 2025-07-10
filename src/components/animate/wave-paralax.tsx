import { styled } from '@mui/material/styles';

const Svg = styled('svg')(({ theme }) => ({
    display: 'block',
    width: '100%',
    height: '60px',
    maxHeight: '60px',
    margin: 0,
    zIndex: 5,
    bottom: 0,
    position: 'absolute',
    left: 0,
    '& .parallax1 > use': {
        animation: 'move-forever1 10s linear infinite',
        animationDelay: '-2s',
    },
    '& .parallax2 > use': {
        animation: 'move-forever2 8s linear infinite',
        animationDelay: '-2s',
    },
    '& .parallax3 > use': {
        animation: 'move-forever3 6s linear infinite',
        animationDelay: '-2s',
    },
    '& .parallax4 > use': {
        animation: 'move-forever4 4s linear infinite',
        animationDelay: '-2s',
    },
    '@keyframes move-forever1': {
        '0%': { transform: 'translate(85px, 0%)' },
        '100%': { transform: 'translate(-90px, 0%)' },
    },
    '@keyframes move-forever2': {
        '0%': { transform: 'translate(-90px, 0%)' },
        '100%': { transform: 'translate(85px, 0%)' },
    },
    '@keyframes move-forever3': {
        '0%': { transform: 'translate(85px, 0%)' },
        '100%': { transform: 'translate(-90px, 0%)' },
    },
    '@keyframes move-forever4': {
        '0%': { transform: 'translate(-90px, 0%)' },
        '100%': { transform: 'translate(85px, 0%)' },
    },
}));

export default function WaveParallax() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
        >
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 
             58-18 88-18s
             58 18 88 18 
             58-18 88-18 
             58 18 88 18
             v44h-352z"
                />
            </defs>
            <g className="parallax1">
                <use xlinkHref="#gentle-wave" x="50" y="3" fill="#f461c1" />
            </g>
            <g className="parallax2">
                <use xlinkHref="#gentle-wave" x="50" y="0" fill="#4579e2" />
            </g>
            <g className="parallax3">
                <use xlinkHref="#gentle-wave" x="50" y="9" fill="#3461c1" />
            </g>
            <g className="parallax4">
                <use xlinkHref="#gentle-wave" x="50" y="6" fill="#fff" />
            </g>
        </Svg>
    );
}
