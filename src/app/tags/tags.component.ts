import { FoodService } from './../service/food.service';
import { Component, OnInit } from '@angular/core';
import { tags } from '../shared/models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
tag!:tags[]
constructor(private fs:FoodService) {}

ngOnInit(): void {
  this.tag=this.fs.getAllTags();
}


}
