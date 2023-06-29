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
          minLength={8}
          maxLength={8}
          required
          {...register("address.zipCode")}
        />
        <FieldContainer
          type="text"
          placeholder="Rua"
          required
          {...register("address.street")}
        />
        <FieldContainer
          type="text"
          placeholder="Número"
          required
          {...register("address.number")}
        />
        <FieldContainer
          type="text"
          placeholder="Complemento"
          {...register("address.complement")}
        ></FieldContainer>
        <FieldContainer
          type="text"
          placeholder="Bairro"
          required
          {...register("address.neighborhood")}
        />
        <FieldContainer
          type="text"
          placeholder="Cidade"
          required
          {...register("address.city")}
        />
        <FieldContainer
          type="text"
          placeholder="UF"
          minLength={2}
          maxLength={2}
          required
          {...register("address.state")}
        />
      </FieldsetContainer>
    </CardContainer>
  );
}

export default AddressCard;
