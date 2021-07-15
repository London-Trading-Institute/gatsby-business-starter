import styled, { css } from 'styled-components';

export const PricingCardsContainer = styled.div`
    display: flex;
    margin: 4% 15%;
    justify-content: space-between;
`;

export const PricingCard = styled.div`
    ${props => props.isFeatured && css`
        background-color : black;
    `}
`;

export const PriceContainer = styled.div`
    margin: 10px 0px 10px;
`;

export const PricingPlanName = styled.div`
    font-size: 2rem;
`;

export const Price = styled.div`
    display: inline;
    font-size: 3rem;
    font-weight: bold;
`;

export const PriceCycle = styled.div`
    display: inline;
    color: grey;
    margin-left: 10px;
`;

export const PriceDescription = styled.div`
    width: 60%;
    line-height: 1.5;
    color: grey;
`;

export const PerksContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 32px;
`;

export const PerkContainer = styled.div`
    margin-top: 22px;
`;


export const Perk = styled.h4`
    font-weight: 500;
    display: inline;
    margin-left: 8px;
`;

