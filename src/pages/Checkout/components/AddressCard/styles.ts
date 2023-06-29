import { styled } from "styled-components";

export const FieldsetContainer = styled.fieldset`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  row-gap: 1rem;
  column-gap: 0.75rem;
  border: none;

  input[name="address.zipCode"] {
    grid-row: 1;
    grid-column: 1 / span 1;
  }

  input[name="address.street"] {
    grid-row: 2;
    grid-column: 1 / span 3;
  }

  input[name="address.number"] {
    grid-row: 3;
    grid-column: 1 / span 1;
  }

  input[name="address.complement"] {
    grid-row: 3;
    grid-column: 2 / span 2;
  }

  input[name="address.neighborhood"] {
    grid-row: 4;
    grid-column: 1 / span 1;
  }

  input[name="address.city"] {
    grid-row: 4;
    grid-column: 2 / span 1;
  }

  input[name="address.state"] {
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
