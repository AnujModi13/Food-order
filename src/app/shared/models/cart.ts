import { CartItems } from "./cartItems";

export class Cart {

  items: CartItems[]=[];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    })
    return totalPrice;
  }
}
