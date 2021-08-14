import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif
    }
    html {
        min-height: 100%;
        background: ${colors.body.background};
    }
    *, button, input {
        border: 0;
        background: none;
    }
    ul {
        list-style: none;
    }
`;
