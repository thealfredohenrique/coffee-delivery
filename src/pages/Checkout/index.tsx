import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { OrderContext } from "../../contexts/OrderContext";
import AddressCard from "./components/AddressCard";
import CartCard from "./components/CartCard";
import PaymentCard from "./components/PaymentCard";
import {
  CheckoutContainer,
  LeftContainer,
  RightContainer,
  TitleContainer,
} from "./styles";

export enum PaymentType {
  CreditCard = "CREDIT_CARD",
  DebitCard = "DEBIT_CARD",
  Cash = "CASH",
}

const validationSchema = zod.object({
  address: zod.object({
    zipCode: zod
      .string()
      .trim()
      .length(8, "O campo CEP precisa ter 8 caracteres."),
    street: zod.string().trim().min(1, "Informe o campo Rua."),
    number: zod.string().min(1, "Informe o campo Número."),
    complement: zod.string().trim().optional(),
    neighborhood: zod.string().trim().min(1, "Informe o campo Bairro."),
    city: zod.string().trim().min(1, "Informe o campo Cidade."),
    state: zod
      .string()
      .trim()
      .length(2, "O campo UF precisa ter 2 caracteres."),
  }),
  paymentType: zod.enum([
    PaymentType.CreditCard,
    PaymentType.DebitCard,
    PaymentType.Cash,
  ]),
});

type OrderFormData = zod.infer<typeof validationSchema>;

function Checkout() {
  const { items, fillAddress, fillPaymentType } = useContext(OrderContext);
  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(validationSchema),
  });
  const { handleSubmit } = orderForm;
  const navigate = useNavigate();

  useEffect(() => {
    if (!items.length) navigate("/");
  }, [items]);

  function handleSubmitOrder(data: OrderFormData) {
    fillAddress(data.address);
    fillPaymentType(data.paymentType);

    navigate("/success");
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSubmitOrder)}>
      <LeftContainer>
        <TitleContainer>Complete seu pedido</TitleContainer>

        <FormProvider {...orderForm}>
          <AddressCard />
          <PaymentCard />
        </FormProvider>
      </LeftContainer>

      <RightContainer>
        <TitleContainer>Cafés selecionados</TitleContainer>

        <CartCard />
      </RightContainer>
    </CheckoutContainer>
  );
}

export default Checkout;
