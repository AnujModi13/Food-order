import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { tags } from '../shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods
  {
   return this.getAll().find(food =>food.id ==id)!;
  }
  getFoodByTag(tag :string) :Foods[]
  {
    return tag=='All'?this.getAll(): this.getAll().filter(food => food.tags?.
      includes(tag));
  }
  getAllTags() :tags[]
  {
    return[
      { name:'All',count:20},
      { name:'FastFood',count:0},
      { name:'Lunch',count:0},
      { name:'Dinner',count:0},
      { name:'Breakfast',count:0},
      { name:'Dessert',count:0},
      { name:'Snacks',count:0},
      { name:'Drinks',count:0},
      { name:'Salad',count:0},
    ]
  }
  getAll() : Foods[]
  {
   return[
    {
      id:1,
      name:'Potato Meat',
      cookTime:'30-40',
      price:230,
      favourite:true,
      origins:['India','Dubai'],
      star:4.5,
      imageUrl:'/assets/Image-1.jpg',
      tags:['FastFood','Lunch','Dinner'],
    },
    {
      id:2,
      name:'Potato Meat',
      cookTime:'30-40',
      price:230.45,
      favourite:true,
      origins:['India','Dubai'],
      star:3.5,
      imageUrl:'/assets/Image-2.jpg',
      tags:['FastFood','Lunch','Dinner'],
    },
    {
      id:3,
      name:' Rice',
      cookTime:'30-40',
      price:230,
      favourite:false,
      origins:['India','Dubai'],
      star:2.5,
      imageUrl:'/assets/Image-3.jpg',
      tags:['FastFood','Lunch','Dinner'],
    },
    {
      id:4,
      name:'Potato Meat',
      cookTime:'30-40',
      price:230,
      favourite:true,
      origins:['India','Dubai'],
      star:0.5,
      imageUrl:'/assets/Image-4.jpg',
      tags:['FastFood','Dinner'],
    },
    {
      id:5,
      name:'Potato Meat',
      cookTime:'30-40',
      price:230,
      favourite:true,
      origins:['India','Dubai'],
      star:1.5,
      imageUrl:'/assets/Image-5.jpg',
      tags:['FastFood','Lunch','Dinner'],
    },
    {
      id:6,
      name:'Potato Meat',
      cookTime:'30-40',
      price:230,
      favourite:true,
      origins:['India','Dubai'],
      star:5,
      imageUrl:'/assets/Image-6.jpg',
      tags:['FastFood','Lunch','Dinner'],
    },
    {
      id:7,
      name:'Potato Meat',
      cookTime:'30-40',
      price:230,
      favourite:true,
      origins:['India','Dubai'],
      star:3.5,
      imageUrl:'/assets/Image-7.jpg',
      tags:['FastFood','Lunch','Dinner'],
    },
    {
      id:8,
      name:'Potato Meat',
      cookTime:'30-40',
      price:230,
      favourite:true,
      origins:['India','Dubai'],
      star:4.1,
      imageUrl:'/assets/Image-8.jpg',
      tags:['FastFood','Lunch','Dinner'],
    }
   ]
  }
}
