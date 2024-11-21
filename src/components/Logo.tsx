import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g>
            <g>
              <mask id="mask0_9528_58566" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="45">
                <g>
                  <path d="M39.0747 0H0V45H39.0747V0Z" fill="white"/>
                </g>
              </mask>
              <g mask="url(#mask0_9528_58566)">
                <g>
                  <path d="M39.0766 11.2505V33.7514L19.5383 45L0 33.7514V11.2505L19.5383 0L39.0766 11.2505ZM19.6478 1.38699L9.30118 12.411L19.5402 6.51403L19.7666 6.64989L34.8629 10.1503L19.6478 1.38699ZM5.65915 14.5094L5.88563 14.3792L16.4719 3.08909L1.25863 11.8506L5.65915 26.2996V14.5094ZM18.9665 8.16896L13.5508 11.2882L18.9665 33.1155V8.16896ZM20.1138 8.16896V33.1155L25.5296 11.2882L20.1138 8.16896ZM23.1802 8.6105L33.4212 14.5094V14.7717L37.9274 29.5565V12.0355L23.1802 8.6105ZM12.5129 11.8883L7.0197 15.0491L18.0041 34.0269L12.5129 11.8883ZM26.5675 11.8883L21.0724 34.0269L32.0606 15.051L26.5675 11.8883ZM5.65915 30.4944V30.2321L1.15111 15.4454V32.9645L15.8963 36.3876L5.65915 30.4944ZM32.2701 16.9795L21.1083 36.2555L32.2701 29.8302V16.9795ZM6.8122 16.9795V29.8302L17.9682 36.2555L6.8122 16.9795ZM33.4212 18.7061V30.4963L33.1891 30.6284L21.8914 42.3242L37.8198 33.1494L33.4212 18.7061ZM29.5999 32.6928L19.5383 38.486L19.3118 38.3539L4.2156 34.8534L19.1816 43.4715L29.5999 32.6928Z" fill="url(#paint0_linear_9528_58566)"/>
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient 
            id="paint0_linear_9528_58566" 
            x1="4.55056" 
            y1="43.0545" 
            x2="33.1148" 
            y2="3.88406" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#34A773"/>
            <stop offset="1" stopColor="#B0E842"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="font-bold text-2xl">
        <span className="hub-gradient">Hub</span>
        <span className="text-yellow-400 font-cursive italic">.</span>
      </span>
    </div>
  );
}