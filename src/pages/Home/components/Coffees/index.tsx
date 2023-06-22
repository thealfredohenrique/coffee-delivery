import CoffeeCard from "../CoffeeCard";
import {
  CoffeesContainer,
  CoffeesListContainer,
  SectionTitleContainer,
} from "./styles";

const coffees = [
  {
    id: self.crypto.randomUUID(),
    image: "traditional-espresso-coffee.png",
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "american-espresso-coffee.png",
    tags: ["TRADICIONAL"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "creamy-espresso-coffee.png",
    tags: ["TRADICIONAL"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "iced-espresso-coffee.png",
    tags: ["TRADICIONAL", "GELADO"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "coffee-with-milk.png",
    tags: ["TRADICIONAL", "COM LEITE"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "latte-coffee.png",
    tags: ["TRADICIONAL", "COM LEITE"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "cappuccino-coffee.png",
    tags: ["TRADICIONAL", "COM LEITE"],
    name: "Cappuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "macchiato-coffee.png",
    tags: ["TRADICIONAL", "COM LEITE"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "mocaccino-coffee.png",
    tags: ["TRADICIONAL", "COM LEITE"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "warm-chocolate.png",
    tags: ["ESPECIAL", "COM LEITE"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "cuban-coffee.png",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "hawaiian-coffee.png",
    tags: ["ESPECIAL"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "arabic-coffee.png",
    tags: ["ESPECIAL"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: self.crypto.randomUUID(),
    image: "irish-coffee.png",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];

function Coffees() {
  return (
    <CoffeesContainer>
      <SectionTitleContainer>Nossos cafés</SectionTitleContainer>
      <CoffeesListContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesListContainer>
    </CoffeesContainer>
  );
}

export default Coffees;
