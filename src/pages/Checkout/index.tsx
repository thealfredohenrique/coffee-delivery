import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import AddressCard from "./components/AddressCard";
import CartCard from "./components/CartCard";
import PaymentCard from "./components/PaymentCard";
import {
  CheckoutContainer,
  LeftContainer,
  RightContainer,
  TitleContainer,
} from "./styles";

const validationSchema = zod.object({
  address: zod.object({
    zipCode: zod
      .string()
      .trim()
      .length(8, "O campo CEP precisa ter 8 caracteres."),
    street: zod
      .string()
      .trim()
      .min(3, "O campo Rua precisa ter no mínimo 3 caracteres."),
    number: zod
      .string()
      .min(1, "O campo Número precisa ter no mínimo um caractere."),
    complement: zod.string().trim().optional(),
    neighborhood: zod
      .string()
      .trim()
      .min(3, "O campo Bairro precisa ter no mínimo 3 caracteres."),
    city: zod
      .string()
      .trim()
      .min(3, "O campo Cidade precisa ter no mínimo 3 caracteres."),
    state: zod
      .string()
      .trim()
      .length(2, "O campo UF precisa ter 2 caracteres."),
  }),
  paymentType: zod.string(),
});

type OrderFormData = zod.infer<typeof validationSchema>;

function Checkout() {
  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      address: {
        zipCode: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
      },
      paymentType: "",
    },
  });

  return (
    <CheckoutContainer>
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
