import { useContext } from "react";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { OrderContext } from "../../contexts/OrderContext";
import { PaymentType } from "../Checkout";
import deliveryIllustration from "../../assets/delivery-illustration.svg";
import {
  SuccessContainer,
  SuccessContentWrapper,
  SuccessDescriptionContainer,
  SuccessIconContainer,
  SuccessInfoContainer,
  SuccessItemContainer,
  SuccessOrderContainer,
  SuccessTitleContainer,
} from "./styles";

function Success() {
  const { address, paymentType } = useContext(OrderContext);

  function getPaymentName(paymentType: PaymentType) {
    switch (paymentType) {
      case PaymentType.CreditCard:
        return "Cartão de Crédito";
      case PaymentType.DebitCard:
        return "Cartão de Débito";
      case PaymentType.Cash:
        return "Dinheiro";
    }
  }

  return (
    <SuccessContainer>
      <SuccessTitleContainer>Uhu! Pedido confirmado</SuccessTitleContainer>
      <SuccessDescriptionContainer>
        Agora é só aguardar que logo o café chegará até você
      </SuccessDescriptionContainer>

      <SuccessContentWrapper>
        <SuccessOrderContainer>
          <SuccessItemContainer>
            <SuccessIconContainer color="purple">
              <MapPin size={16} weight="fill" />
            </SuccessIconContainer>

            <SuccessInfoContainer>
              <p>
                Entrega em{" "}
                <strong>
                  {address?.street}, {address?.number}
                </strong>
              </p>
              <p>
                {address?.neighborhood} - {address?.city}, {address?.state}
              </p>
            </SuccessInfoContainer>
          </SuccessItemContainer>

          <SuccessItemContainer>
            <SuccessIconContainer color="yellow">
              <Timer size={16} weight="fill" />
            </SuccessIconContainer>

            <SuccessInfoContainer>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </SuccessInfoContainer>
          </SuccessItemContainer>

          <SuccessItemContainer>
            <SuccessIconContainer color="orange">
              <CurrencyDollar size={16} />
            </SuccessIconContainer>

            <SuccessInfoContainer>
              <p>Pagamento na entrega</p>
              {paymentType && <strong>{getPaymentName(paymentType)}</strong>}
            </SuccessInfoContainer>
          </SuccessItemContainer>
        </SuccessOrderContainer>

        <img src={deliveryIllustration} />
      </SuccessContentWrapper>
    </SuccessContainer>
  );
}

export default Success;
