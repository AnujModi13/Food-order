import { FoodService } from './../service/food.service';
import { Component, Input, OnInit } from '@angular/core';
import { tags } from '../shared/models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  foodPageTags?:string[]
  @Input()
  justifyContent:string='center'
  tag?:tags[]
constructor(private fs:FoodService) {}

ngOnInit(): void {
  if(!this.foodPageTags)
  this.tag=this.fs.getAllTags();
}


}
