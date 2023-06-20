import { styled } from "styled-components";

export const AddressCardContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
`;

export const LegendContainer = styled.legend`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.yellowDark};
  }
`;

export const LegendTextContainer = styled.div`
  line-height: 1.3;

  h2 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: ${(props) => props.theme.baseText};
    font-size: 0.875rem;
  }
`;

export const FieldsetContainer = styled.fieldset`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  row-gap: 1rem;
  column-gap: 0.75rem;
  border: none;

  input[name="zip-code"] {
    grid-row: 1;
    grid-column: 1 / span 1;
  }

  input[name="street"] {
    grid-row: 2;
    grid-column: 1 / span 3;
  }

  input[name="number"] {
    grid-row: 3;
    grid-column: 1 / span 1;
  }

  input[name="complement"] {
    grid-row: 3;
    grid-column: 2 / span 2;
  }

  input[name="neighborhood"] {
    grid-row: 4;
    grid-column: 1 / span 1;
  }

  input[name="city"] {
    grid-row: 4;
    grid-column: 2 / span 1;
  }

  input[name="state"] {
    grid-row: 4;
    grid-column: 3 / span 1;
  }
`;

export const FieldContainer = styled.input`
  background-color: ${(props) => props.theme.baseInput};
  color: ${(props) => props.theme.baseText};
  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 4px;
  font-size: 0.875rem;
  padding: 0.75rem;
  outline: transparent;

  &:focus {
    border-color: ${(props) => props.theme.yellowDark};
  }
`;
