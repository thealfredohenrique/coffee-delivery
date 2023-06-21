import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import {
  CardContainer,
  LegendContainer,
  LegendTextContainer,
} from "../../styles";
import { FieldsetContainer, InputContainer, PaymentTypeOption } from "./styles";

function PaymentCard() {
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
          name="payment-type"
          id="credit-payment-type"
          value="credit-card"
        />
        <PaymentTypeOption htmlFor="credit-payment-type">
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentTypeOption>

        <InputContainer
          type="radio"
          name="payment-type"
          id="debit-payment-type"
          value="debit-card"
        />
        <PaymentTypeOption htmlFor="debit-payment-type">
          <Bank size={16} />
          Cartão de débito
        </PaymentTypeOption>

        <InputContainer
          type="radio"
          name="payment-type"
          id="money-payment-type"
          value="money"
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
