import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './aigenwear_logo_white.png',
    fullDecal: './aigenwear_logo_white.png'
});

export default state;