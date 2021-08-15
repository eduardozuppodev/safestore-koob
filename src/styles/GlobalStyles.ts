import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
    // Estilos globais Padrões
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

    // Personalização do Scroll
    ::-webkit-scrollbar {
    width: 3px;
    height: 2px;
    }

    ::-webkit-scrollbar-track {
    background: ${colors.body.background};
    }

    ::-webkit-scrollbar-thumb {
    background: ${colors.header.tertiary};
    }
`;
