import db from "./db";

export const GetIngredients = () => {
  return db.ingredients;
}

export const CreateNewOrder = (data: any) => {
  return db.addOrder(data);
}

export const GetOrders = () => {
  return db.orders;
}

export const DeleteOrder = (orderId: number) => {
  db.deleteOrder(orderId)
}
