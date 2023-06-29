import { useFormContext } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentType } from "../..";
import {
  CardContainer,
  LegendContainer,
  LegendTextContainer,
} from "../../styles";
import { FieldsetContainer, InputContainer, PaymentTypeOption } from "./styles";

function PaymentCard() {
  const { register } = useFormContext();

  return (
    <CardContainer>
      <LegendContainer color="purple">
        <CurrencyDollar size={22} />

        <LegendTextContainer>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </LegendTextContainer>
      </LegendContainer>

      <FieldsetContainer>
        <InputContainer
          type="radio"
          id="credit-payment-type"
          value={PaymentType.CreditCard}
          required
          {...register("paymentType")}
        />
        <PaymentTypeOption htmlFor="credit-payment-type">
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentTypeOption>

        <InputContainer
          type="radio"
          id="debit-payment-type"
          value={PaymentType.DebitCard}
          required
          {...register("paymentType")}
        />
        <PaymentTypeOption htmlFor="debit-payment-type">
          <Bank size={16} />
          Cartão de débito
        </PaymentTypeOption>

        <InputContainer
          type="radio"
          id="cash-payment-type"
          value={PaymentType.Cash}
          required
          {...register("paymentType")}
        />
        <PaymentTypeOption htmlFor="cash-payment-type">
          <Money size={16} />
          Dinheiro
        </PaymentTypeOption>
      </FieldsetContainer>
    </CardContainer>
  );
}

export default PaymentCard;
