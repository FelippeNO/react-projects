import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
body {
    background: url(${bgImg}) center no-repeat;
    color: #332c36;
    padding: 0;
    margin: 0;
}
`;