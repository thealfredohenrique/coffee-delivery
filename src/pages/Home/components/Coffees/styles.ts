import { styled } from "styled-components";

export const CoffeesContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;
`;

export const SectionTitleContainer = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme.baseSubtitle};
  padding: 2rem 0;
`;

export const CoffeesListContainer = styled.div`
  padding: 2rem 0;
`;
