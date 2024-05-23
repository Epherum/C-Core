import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const PhEmail = () => {
  const themeContext = useContext<DefaultTheme | undefined>(ThemeContext);
  
  return (
<svg width="20" height="20" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 3.75H2.5C2.16848 3.75 1.85054 3.8817 1.61612 4.11612C1.3817 4.35054 1.25 4.66848 1.25 5V15C1.25 15.3315 1.3817 15.6495 1.61612 15.8839C1.85054 16.1183 2.16848 16.25 2.5 16.25H17.5C17.8315 16.25 18.1495 16.1183 18.3839 15.8839C18.6183 15.6495 18.75 15.3315 18.75 15V5C18.75 4.66848 18.6183 4.35054 18.3839 4.11612C18.1495 3.8817 17.8315 3.75 17.5 3.75ZM16.125 5L10 9.2375L3.875 5H16.125ZM2.5 15V5.56875L9.64375 10.5125C9.74837 10.5851 9.87267 10.624 10 10.624C10.1273 10.624 10.2516 10.5851 10.3562 10.5125L17.5 5.56875V15H2.5Z" fill={themeContext?.colors.text.textPrimary}/>
</svg>
);
}
