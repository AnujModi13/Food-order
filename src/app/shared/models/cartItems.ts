import { Foods } from "./food";

export class CartItems {
  food:Foods;
  quantity:number=1;

  constructor(food: Foods) {
    this.food = food;
  }


  get price():Number{
    return this.food.price * this.quantity;
  }
}
