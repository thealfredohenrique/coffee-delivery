import { styled } from "styled-components";

export const CoffeeCardContainer = styled.article`
  background-color: ${(props) => props.theme.baseCard};
  height: 19.375rem;
  width: 16rem;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.5rem;
`;

export const CoffeeFigureContainer = styled.figure`
  transform: translateY(-1.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const CoffeeImageContainer = styled.img`
  height: 7.5rem;
  width: 7.5rem;
`;

export const CoffeeTagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const CoffeeTagContainer = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  padding: 0.25rem 0.5rem;
  border-radius: 99px;
`;

export const CoffeeTitleContainer = styled.h3`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.baseSubtitle};
`;

export const CoffeeDescriptionContainer = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.baseLabel};
  text-align: center;
  margin-top: 0.5rem;
`;

export const BuyCoffeeContainer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: auto;
  width: 100%;
`;

export const CoffeePriceContainer = styled.span`
  font-size: 0.875rem;

  strong {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const CoffeeCounterContainer = styled.div`
  margin-left: auto;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme.baseTitle};
    font-size: 0.875rem;
  }
`;

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const CounterButtonContainer = styled(BaseButton)`
  background-color: transparent;
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme.purpleDark};
  }
`;

export const BuyButtonContainer = styled(BaseButton)`
  background-color: ${(props) => props.theme.purpleDark};
  color: ${(props) => props.theme.baseCard};
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  margin-left: 0.5rem;
  transition: 100ms;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
