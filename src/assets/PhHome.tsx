import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const PhHome = () => {
  const themeContext = useContext<DefaultTheme | undefined>(ThemeContext);
  
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 20.0001C21 20.2653 20.8946 20.5196 20.7071 20.7072C20.5196 20.8947 20.2652 21.0001 20 21.0001H4C3.73478 21.0001 3.48043 20.8947 3.29289 20.7072C3.10536 20.5196 3 20.2653 3 20.0001V9.49005C2.99989 9.33766 3.03462 9.18727 3.10152 9.05035C3.16841 8.91343 3.26572 8.79362 3.386 8.70005L11.386 2.47705C11.5615 2.3405 11.7776 2.26636 12 2.26636C12.2224 2.26636 12.4385 2.3405 12.614 2.47705L20.614 8.70005C20.7343 8.79362 20.8316 8.91343 20.8985 9.05035C20.9654 9.18727 21.0001 9.33766 21 9.49005V20.0001ZM19 19.0001V9.97805L12 4.53405L5 9.97805V19.0001H19Z" fill={themeContext?.colors.bg.bgPrimary}/>
    </svg>
    );
}
