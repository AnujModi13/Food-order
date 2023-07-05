import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/food.service';


@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{
  food: Foods = new Foods;


  constructor(private activatedroute: ActivatedRoute, private foodservice: FoodService,private cartservice:CartService, private route:Router) {
    activatedroute.params.subscribe((params) => {
      if (params['id'])
        this.food = foodservice.getFoodById(params['id'])

    })
  }
  ngOnInit(): void {
  }

  addToCart(){
    this.cartservice.addToCart(this.food)
    this.route.navigateByUrl('/cart-page')
  }

}
