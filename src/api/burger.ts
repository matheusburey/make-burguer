import { ingredients, requests } from "./db";

export const GetIngredients = () => {
  return ingredients;
}

export const CreateNewBurger = (data: any) => {
  requests.push(data);
  return requests
}