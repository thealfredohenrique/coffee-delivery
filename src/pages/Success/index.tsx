import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </SuccessInfoContainer>
          </SuccessItemContainer>
        </SuccessOrderContainer>

        <img src={deliveryIllustration} />
      </SuccessContentWrapper>
    </SuccessContainer>
  );
}

export default Success;
