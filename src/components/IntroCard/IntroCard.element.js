import styled from 'styled-components'

export const IntroCardContainer = styled.div`
    background-color: #F7F9FF;
    color: #132B4C;
    display: flex;
    flex-basis: 80%;
    ustify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const IntroLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IntroLeftContainerHeader = styled.div`
    display: flex;
    padding: 2rem 7rem;
    flex-basis: 50%;
    @media (max-width: 500px) {
        padding: 4rem 3rem;
    }
`;

export const FeatureItem = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  border: none;
  justify-content: center;
  background-color: white;
  width: 100px;
  height: 100px;
  text-align: center;
  margin-right: 5%;
  padding: 10px;
  font-size: 14px;
`;


export const InputField = styled.input`
    display: block;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px 0px 0px 6px;
    border: none;
    padding: 10px 12px;
    width: 50%;
    margin-top: 10px;
    height: 50px;
`;

export const Button = styled.button`
    background: #FFAB00 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0px 4px 4px 0px;
    border: none;
    margin-top: 10px;
    height: 50px;
    padding: 0px 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
`;


export const IntroTitle = styled.h1`
    display: flex;
    font-size: 2rem;
    line-height: 1.3;
`;

export const DescriptionContainer = styled.p`
    display: block;
    font-size: 20px;
    color: #132B4C;
    line-height: 1.6;
`;

export const ButtonsContainer = styled.div`
`;

export const WhiteButtonsContainer = styled.div`
    display: flex;
`;

export const YellowButtonContainer = styled.div`
    margin-top: 20px;
`;

export const YellowButton = styled.button`
    background-color: #0070ba;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #0070ba;
    cursor: pointer;

    &:hover {
        background-color: white;
    }
`;

export const WhiteButton = styled.button`
    background-color: white;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    margin-right: 10px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #0070ba;
    cursor: pointer;

    &:hover {
        background-color: #0070ba;
    }

    &:last-child {
        margin-right: 0;
    }

`;
