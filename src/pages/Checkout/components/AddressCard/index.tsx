import { MapPinLine } from "@phosphor-icons/react";
import {
  AddressCardContainer,
  FieldContainer,
  FieldsetContainer,
  LegendContainer,
  LegendTextContainer,
} from "./styles";

function AddressCard() {
  return (
    <AddressCardContainer>
      <LegendContainer>
        <MapPinLine size={22} />

        <LegendTextContainer>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </LegendTextContainer>
      </LegendContainer>

      <FieldsetContainer>
        <FieldContainer
          type="text"
          name="zip-code"
          placeholder="CEP"
          required
        />
        <FieldContainer type="text" name="street" placeholder="Rua" required />
        <FieldContainer
          type="text"
          name="number"
          placeholder="Número"
          required
        />
        <FieldContainer
          type="text"
          name="complement"
          placeholder="Complemento"
        ></FieldContainer>
        <FieldContainer
          type="text"
          name="neighborhood"
          placeholder="Bairro"
          required
        />
        <FieldContainer type="text" name="city" placeholder="Cidade" required />
        <FieldContainer type="text" name="state" placeholder="UF" required />
      </FieldsetContainer>
    </AddressCardContainer>
  );
}

export default AddressCard;