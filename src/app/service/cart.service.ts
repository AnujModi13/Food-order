import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart= new Cart();
  constructor() { }
  addToCart(food:Foods){
    let cartItem=this.cart.items.find(item => item.food.id===food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new cartItem(food));
  }
}
