import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { FoodService } from '../service/food.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value:number | undefined;
  food:Foods[]=[];
  constructor(private fs:FoodService){}


  ngOnInit(): void {
      this.food=this.fs.getAll();
  }

}
