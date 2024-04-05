import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const Logo = () => {
  const themeContext = useContext<DefaultTheme | undefined>(ThemeContext);
  
  return (
    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_13_15)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4601 9.34337C17.9858 5.05766 11.7999 5.05765 9.32553 9.34337L1.80966 22.3612C-0.664693 26.6469 2.42825 32.0041 7.37696 32.0041H22.4087C27.3574 32.0041 30.4504 26.6469 27.976 22.3612L27.4197 21.3976L24.7758 16.8183L20.4601 9.34337ZM15 16.2005C16.7752 16.2005 18.2143 14.7614 18.2143 12.9862C18.2143 11.211 16.7752 9.77195 15 9.77195C13.2248 9.77195 11.7857 11.211 11.7857 12.9862C11.7857 14.7614 13.2248 16.2005 15 16.2005Z" fill={themeContext?.colors.bg.bgSecondary}/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1927 21.7234C27.2699 21.6157 27.3455 21.5071 27.4197 21.3976L24.7758 16.8183C24.4598 17.6242 24.044 18.3918 23.5349 19.1022C22.3934 20.6952 20.8288 21.937 19.0182 22.687C17.2076 23.4369 15.2232 23.6652 13.2896 23.346C11.356 23.0267 9.55032 22.1727 8.07687 20.8805C6.60343 19.5884 5.52102 17.9096 4.95213 16.0342C4.38323 14.1588 4.35055 12.1616 4.85778 10.2686L0.511111 9.10395C-0.213502 11.8082 -0.166812 14.6614 0.645897 17.3405C1.45861 20.0196 3.00489 22.4179 5.10982 24.2638C7.21474 26.1098 9.79427 27.3298 12.5566 27.7859C15.3189 28.2419 18.1537 27.9158 20.7403 26.8444C23.3268 25.773 25.5619 23.9991 27.1927 21.7234Z" fill="#DD7070"/>
    <path d="M28.2288 5.91528C26.909 3.44617 24.9246 1.3957 22.5 -0.00415039L20.25 3.89296C21.9472 4.87286 23.3363 6.30819 24.2602 8.03656C25.184 9.76494 25.6057 11.7174 25.4775 13.673C25.4065 14.7564 25.1683 15.8169 24.7758 16.8183L27.4197 21.3976C28.9127 19.1932 29.7934 16.6288 29.9679 13.9673C30.151 11.1736 29.5486 8.38439 28.2288 5.91528Z" fill="#DD7070"/>
    </g>
    <defs>
    <clipPath id="clip0_13_15">
    <rect width="30" height="32.0082" fill="white" transform="translate(0 -0.00415039)"/>
    </clipPath>
    </defs>
    </svg>
 );
};