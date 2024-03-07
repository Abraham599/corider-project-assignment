const Corner = ()=>{

return (
<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8_15)">
<path d="M20 0L12 8L4 0H20Z" fill="#008000"/>
<path d="M12 7.29289L5.20711 0.5H18.7929L12 7.29289Z" stroke="#008000"/>
</g>
<defs>
<filter id="filter0_d_8_15" x="0" y="0" width="24" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_15"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_15" result="shape"/>
</filter>
</defs>
</svg>
);
}

export default Corner;