import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { CartItems } from '../shared/models/cartItems';

function _window() : any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  constructor() { }
  get nativeWindow() : any {
    return _window();
 }
  addToCart(food: Foods) {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItems(food));
  }
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(items => items.food.id !== foodId)
  }
  changeQuantity(quantity: number, foodId: number) {
    let cartItem = this.cart.items.find(items => items.food.id === foodId)
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
