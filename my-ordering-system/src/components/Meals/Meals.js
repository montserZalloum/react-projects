import React from "react";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
function Meals() {
  const meals = DUMMY_MEALS.map((item) => (
    <MealItem
      key={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
      id={item.id}
    />
  ));

  return <>
  <ul className="d-flex flex-column gap-25">{meals}</ul>
  </>;
}

export default Meals;
