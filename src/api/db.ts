const status = [
  { id: 1, type: "Solicitado" },
  { id: 2, type: "Em produção" },
  { id: 3, type: "Finalizado" },
];

const ingredients = {
  breads: [
    { id: 1, type: "Italiano Branco" },
    { id: 2, type: "Queijos" },
    { id: 3, type: "Parmesão e Orégano" },
    { id: 4, type: "Integral" },
  ],
  meat: [
    { id: 1, type: "Maminha" },
    { id: 2, type: "Alcatra" },
    { id: 3, type: "Picanha" },
    { id: 4, type: "Veggie Burger" },
  ],
  optional: [
    { id: 1, type: "Bacon" },
    { id: 2, type: "Cheddar" },
    { id: 3, type: "Salame" },
    { id: 4, type: "Tomate" },
    { id: 5, type: "Cebola" },
    { id: 6, type: "Pepino" },
  ],
};

const orders = [
  {
    id: 1,
    status: "Solicitado",
    name: "Matheus",
    meat: "Picanha",
    bread: "Italiano Branco",
    optionais: [],
  },
];

class Database {
  status=status
  ingredients=ingredients
  orders=orders

  addOrder(data: any) {
    const length = this.orders.length
    const next_id = this.orders[length - 1].id + 1
    data.id = next_id
    this.orders.push(data)
    return data;
  }

  deleteOrder(id: number) {
    const filtered = this.orders.filter((order) => order.id !== id);
    this.orders = filtered
  }
}

const db = new Database();
export default db;
