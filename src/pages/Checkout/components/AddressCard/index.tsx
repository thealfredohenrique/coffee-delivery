import { MapPinLine } from "@phosphor-icons/react";
import {
  CardContainer,
  LegendContainer,
  LegendTextContainer,
} from "../../styles";
import { FieldContainer, FieldsetContainer } from "./styles";
import { useFormContext } from "react-hook-form";

function AddressCard() {
  const { register } = useFormContext();

  return (
    <CardContainer>
      <LegendContainer color="yellow">
        <MapPinLine size={22} />

        <LegendTextContainer>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </LegendTextContainer>
      </LegendContainer>

      <FieldsetContainer>
        <FieldContainer
          type="text"
          placeholder="CEP"
          required
          {...register("zipCode")}
        />
        <FieldContainer
          type="text"
          placeholder="Rua"
          required
          {...register("street")}
        />
        <FieldContainer
          type="text"
          placeholder="Número"
          required
          {...register("number")}
        />
        <FieldContainer
          type="text"
          placeholder="Complemento"
          {...register("complement")}
        ></FieldContainer>
        <FieldContainer
          type="text"
          placeholder="Bairro"
          required
          {...register("neighborhood")}
        />
        <FieldContainer
          type="text"
          placeholder="Cidade"
          required
          {...register("city")}
        />
        <FieldContainer
          type="text"
          placeholder="UF"
          required
          {...register("state")}
        />
      </FieldsetContainer>
    </CardContainer>
  );
}

export default AddressCard;
