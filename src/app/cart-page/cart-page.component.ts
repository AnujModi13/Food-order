import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../service/cart.service';
import { CartItems } from '../shared/models/cartItems';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartservice: CartService,private foodservice:FoodService) {
    // let food=foodservice.getAll();
    // cartservice.addToCart(food[0]);
    // cartservice.addToCart(food[1]);
    // cartservice.addToCart(food[2]);
    this.setCart();
  }

  ngOnInit(): void {

  }

  setCart() {
    this.cart = this.cartservice.getCart();
  }

  removeFromCart(cartitem: CartItems) {
    this.cartservice.removeFromCart(cartitem.food.id);
    this.setCart();
  }

  changequantity(cartitem: CartItems, quantityto: string) {
    const quantity = parseInt(quantityto);
    this.cartservice.changeQuantity( quantity,cartitem.food.id);
    this.setCart();
  }


}
