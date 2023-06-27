import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{
  food: Foods = new Foods;


  constructor(private activatedroute: ActivatedRoute, private foodservice: FoodService) {
    activatedroute.params.subscribe((params) => {
      if (params['id'])
        this.food = foodservice.getFoodById(params['id'])

    })
  }
  ngOnInit(): void {

  }

}
