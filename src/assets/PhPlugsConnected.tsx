import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DefaultTheme } from 'styled-components';


export const PhPlugsConnected = () => {
  const themeContext = useContext<DefaultTheme | undefined>(ThemeContext);
  
  return (
<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M22.2806 1.71935C22.211 1.64962 22.1282 1.5943 22.0372 1.55656C21.9461 1.51882 21.8486 1.49939 21.75 1.49939C21.6514 1.49939 21.5538 1.51882 21.4628 1.55656C21.3717 1.5943 21.289 1.64962 21.2194 1.71935L16.3069 6.63279L15.8034 6.12842C15.2402 5.56681 14.4773 5.25143 13.6819 5.25143C12.8865 5.25143 12.1235 5.56681 11.5603 6.12842L9.37499 8.31467L8.78061 7.71935C8.63988 7.57862 8.44901 7.49956 8.24999 7.49956C8.05097 7.49956 7.8601 7.57862 7.71936 7.71935C7.57863 7.86009 7.49957 8.05096 7.49957 8.24998C7.49957 8.449 7.57863 8.63987 7.71936 8.78061L8.31468 9.37498L6.12843 11.5603C5.84978 11.8389 5.62874 12.1696 5.47793 12.5336C5.32713 12.8977 5.24951 13.2878 5.24951 13.6819C5.24951 14.0759 5.32713 14.466 5.47793 14.8301C5.62874 15.1941 5.84978 15.5248 6.12843 15.8034L6.6328 16.3069L1.71936 21.2194C1.64968 21.289 1.59441 21.3718 1.55669 21.4628C1.51898 21.5539 1.49957 21.6514 1.49957 21.75C1.49957 21.8485 1.51898 21.9461 1.55669 22.0372C1.59441 22.1282 1.64968 22.2109 1.71936 22.2806C1.8601 22.4213 2.05097 22.5004 2.24999 22.5004C2.34854 22.5004 2.44612 22.481 2.53716 22.4433C2.62821 22.4056 2.71093 22.3503 2.78061 22.2806L7.69311 17.3672L8.19655 17.8715C8.47514 18.1502 8.80588 18.3712 9.16991 18.522C9.53393 18.6728 9.92409 18.7505 10.3181 18.7505C10.7121 18.7505 11.1023 18.6728 11.4663 18.522C11.8303 18.3712 12.1611 18.1502 12.4397 17.8715L14.625 15.6853L15.2194 16.2806C15.289 16.3503 15.3718 16.4056 15.4628 16.4433C15.5539 16.481 15.6514 16.5004 15.75 16.5004C15.8485 16.5004 15.9461 16.481 16.0372 16.4433C16.1282 16.4056 16.2109 16.3503 16.2806 16.2806C16.3503 16.2109 16.4056 16.1282 16.4433 16.0372C16.481 15.9461 16.5004 15.8485 16.5004 15.75C16.5004 15.6514 16.481 15.5539 16.4433 15.4628C16.4056 15.3718 16.3503 15.289 16.2806 15.2194L15.6853 14.625L17.8716 12.4397C18.1502 12.1611 18.3712 11.8303 18.522 11.4663C18.6729 11.1023 18.7505 10.7121 18.7505 10.3181C18.7505 9.92408 18.6729 9.53392 18.522 9.1699C18.3712 8.80587 18.1502 8.47513 17.8716 8.19654L17.3672 7.6931L22.2806 2.7806C22.3503 2.71095 22.4057 2.62823 22.4434 2.53718C22.4812 2.44614 22.5006 2.34854 22.5006 2.24998C22.5006 2.15142 22.4812 2.05382 22.4434 1.96277C22.4057 1.87173 22.3503 1.78901 22.2806 1.71935ZM11.3784 16.8131C11.0972 17.0942 10.7158 17.2521 10.3181 17.2521C9.92046 17.2521 9.53908 17.0942 9.2578 16.8131L7.18968 14.7422C6.90859 14.4609 6.75068 14.0795 6.75068 13.6819C6.75068 13.2842 6.90859 12.9028 7.18968 12.6215L9.37499 10.4353L13.5647 14.625L11.3784 16.8131ZM16.8103 11.3812L14.625 13.5647L10.4353 9.37498L12.6216 7.18967C12.9028 6.90858 13.2842 6.75068 13.6819 6.75068C14.0795 6.75068 14.4609 6.90858 14.7422 7.18967L16.8103 9.25217C16.9503 9.39155 17.0614 9.55721 17.1373 9.73965C17.2131 9.9221 17.2521 10.1177 17.2521 10.3153C17.2521 10.5129 17.2131 10.7085 17.1373 10.8909C17.0614 11.0734 16.9503 11.239 16.8103 11.3784V11.3812ZM8.28843 3.23717C8.22552 3.04845 8.24016 2.84247 8.32912 2.66455C8.41808 2.48662 8.57408 2.35132 8.7628 2.28842C8.95152 2.22551 9.1575 2.24015 9.33542 2.32911C9.51335 2.41807 9.64865 2.57407 9.71155 2.76279L10.4616 5.01279C10.4927 5.10624 10.5051 5.2049 10.4982 5.30315C10.4912 5.4014 10.4649 5.49731 10.4209 5.58541C10.3768 5.67351 10.3158 5.75207 10.2414 5.81661C10.167 5.88115 10.0806 5.93039 9.98718 5.96154C9.79846 6.02445 9.59248 6.00981 9.41456 5.92085C9.32646 5.8768 9.2479 5.81583 9.18336 5.74142C9.11882 5.667 9.06958 5.58061 9.03843 5.48717L8.28843 3.23717ZM2.28843 8.76279C2.31957 8.66934 2.36881 8.58295 2.43335 8.50853C2.49788 8.43412 2.57644 8.37314 2.66455 8.32909C2.75265 8.28504 2.84856 8.25878 2.94682 8.2518C3.04507 8.24482 3.14373 8.25726 3.23718 8.28842L5.48718 9.03842C5.58062 9.06957 5.66701 9.11881 5.74143 9.18335C5.81584 9.24789 5.87681 9.32645 5.92086 9.41455C5.96491 9.50265 5.99117 9.59856 5.99816 9.69681C6.00514 9.79506 5.9927 9.89372 5.96155 9.98717C5.9304 10.0806 5.88116 10.167 5.81662 10.2414C5.75208 10.3158 5.67352 10.3768 5.58542 10.4208C5.49732 10.4649 5.40141 10.4912 5.30316 10.4981C5.20491 10.5051 5.10625 10.4927 5.0128 10.4615L2.7628 9.71154C2.66935 9.6804 2.58296 9.63116 2.50854 9.56662C2.43413 9.50209 2.37315 9.42352 2.3291 9.33542C2.28505 9.24732 2.25879 9.15141 2.25181 9.05315C2.24483 8.9549 2.25727 8.85624 2.28843 8.76279ZM21.7116 15.2372C21.6804 15.3306 21.6312 15.417 21.5666 15.4914C21.5021 15.5658 21.4235 15.6268 21.3354 15.6709C21.2473 15.7149 21.1514 15.7412 21.0532 15.7482C20.9549 15.7551 20.8562 15.7427 20.7628 15.7115L18.5128 14.9615C18.3241 14.8986 18.1681 14.7633 18.0791 14.5854C17.9902 14.4075 17.9755 14.2015 18.0384 14.0128C18.1013 13.8241 18.2366 13.6681 18.4146 13.5791C18.5925 13.4901 18.7985 13.4755 18.9872 13.5384L21.2372 14.2884C21.3306 14.3196 21.417 14.3688 21.4914 14.4333C21.5659 14.4979 21.6268 14.5764 21.6709 14.6645C21.7149 14.7526 21.7412 14.8486 21.7482 14.9468C21.7552 15.0451 21.7427 15.1437 21.7116 15.2372ZM15.7116 20.7628C15.7745 20.9515 15.7598 21.1575 15.6709 21.3354C15.5819 21.5133 15.4259 21.6486 15.2372 21.7115C15.0485 21.7744 14.8425 21.7598 14.6646 21.6708C14.4866 21.5819 14.3513 21.4259 14.2884 21.2372L13.5384 18.9872C13.4755 18.7984 13.4902 18.5925 13.5791 18.4145C13.6681 18.2366 13.8241 18.1013 14.0128 18.0384C14.2015 17.9755 14.4075 17.9901 14.5854 18.0791C14.7633 18.1681 14.8986 18.3241 14.9616 18.5128L15.7116 20.7628Z" fill={themeContext?.colors.text.textPrimary}/>
</svg>

    )
  }