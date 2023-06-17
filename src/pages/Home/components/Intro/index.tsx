import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  ContentWrapper,
  IconContainer,
  IntroContainer,
  ItemContainer,
  ItemsContainer,
  LeftContainer,
  RightContainer,
  TitleContainer,
} from "./styles";

function Intro() {
  return (
    <IntroContainer>
      <ContentWrapper>
        <LeftContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>

          <ItemsContainer>
            <ItemContainer>
              <IconContainer color="dark-yellow">
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>
              Compra simples e segura
            </ItemContainer>

            <ItemContainer>
              <IconContainer color="yellow">
                <Timer size={16} weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </ItemContainer>

            <ItemContainer>
              <IconContainer color="gray">
                <Package size={16} weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </ItemContainer>

            <ItemContainer>
              <IconContainer color="purple">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              O café chega fresquinho até você
            </ItemContainer>
          </ItemsContainer>
        </LeftContainer>

        <RightContainer>
          <img src="/src/assets/coffee-image.png" />
        </RightContainer>
      </ContentWrapper>
    </IntroContainer>
  );
}

export default Intro;
