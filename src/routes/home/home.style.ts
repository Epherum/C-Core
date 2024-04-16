import styled from 'styled-components';

export const Wrapper = styled.main`
    ${({theme}) => theme.typography};
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    padding: ${({theme}) => theme.values.size.items.appPadding}px;
    gap: ${({theme}) => theme.values.size.items.appPadding}px;
    display: flex;
    flex-direction: column;
    background-image: ${({theme}) => theme.colors.bg.bgGradient};
    color: ${({theme}) => theme.colors.text.textPrimary};

    .homeContainer {
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        height: 100vh;
        gap: ${({theme}) => theme.values.size.items.appPadding}px;
        overflow: auto;
    }
`;