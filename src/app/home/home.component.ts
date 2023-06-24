import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { FoodService } from '../service/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value:number | undefined;
  foods:Foods[]=[];
  constructor(private fs:FoodService,private route:ActivatedRoute){}


  ngOnInit(): void {

      this.route.params.subscribe(params=>{
        if(params['searchItem'])
        this.foods= this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
        else if(params['tag'])
        this.foods=this.fs.getFoodByTag(params['tag'])
        else
        this.foods=this.fs.getAll();
      })
  }

}
