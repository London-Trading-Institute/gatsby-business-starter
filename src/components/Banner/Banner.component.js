import styled from 'styled-components';

export const BannerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10% 4%; 
`;

export const BannerCard = styled.div`
    flex-basis: 60%;
    margin-left: 30px;
`;

export const BannerTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 2rem;
`;

export const BannerDescription = styled.p`
    width: 90%;
    line-height: 1.6;
    color: grey;
`;

export const YellowButton = styled.button`
    background-color: #007AFF;
    font-size: 1rem;
    font-weight: 600;
    width: 150px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #007AFF;
    cursor: pointer;
    &:hover {
        background-color: white;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
`;

