import { useFormContext } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
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
          value="credit-card"
          {...register("paymentType", { required: true })}
        />
        <PaymentTypeOption htmlFor="credit-payment-type">
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentTypeOption>

        <InputContainer
          type="radio"
          id="debit-payment-type"
          value="debit-card"
          {...register("paymentType", { required: true })}
        />
        <PaymentTypeOption htmlFor="debit-payment-type">
          <Bank size={16} />
          Cartão de débito
        </PaymentTypeOption>

        <InputContainer
          type="radio"
          id="money-payment-type"
          value="money"
          {...register("paymentType", { required: true })}
        />
        <PaymentTypeOption htmlFor="money-payment-type">
          <Money size={16} />
          Dinheiro
        </PaymentTypeOption>
      </FieldsetContainer>
    </CardContainer>
  );
}

export default PaymentCard;
