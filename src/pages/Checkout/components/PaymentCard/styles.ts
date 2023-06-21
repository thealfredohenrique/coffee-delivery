import { styled } from "styled-components";

export const InputContainer = styled.input`
  visibility: hidden;
  position: absolute;

  &:checked + label {
    background-color: ${(props) => props.theme.purpleLight};
    border-color: ${(props) => props.theme.purple};
  }
`;

export const PaymentTypeOption = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};
  font-size: 0.75rem;
  line-height: 1;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.baseHover};
  }
`;

export const FieldsetContainer = styled.fieldset`
  display: flex;
  column-gap: 0.75rem;
  border: none;
`;
