import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
`;


export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: 30px;
    margin-left: 30px;
    padding-left: 50px;
    padding-right: 50px;
    @media screen and (max-width : 991px) {
    padding-left: 30px;
    padding-right: 30px;

    }
`;



export default GlobalStyle;