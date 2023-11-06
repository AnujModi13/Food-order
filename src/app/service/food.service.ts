import { tags } from './../shared/models/tags';
import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getCount(tags: string): number {
    return this.getAll().filter(food => food.tags?.includes(tags)).length;
  }

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
      { name:'All',count:this.getAll().length},
      { name:'FastFood',count:this.getCount('FastFood')},
      { name:'Lunch',count:this.getCount('Lunch')},
      { name:'Dinner',count:this.getCount('Dinner')},
      { name:'Breakfast',count:this.getCount('Breakfast')},
      { name:'Dessert',count:this.getCount('Dessert')},
      { name:'Snacks',count:this.getCount('Snacks')},
      { name:'Drinks',count:this.getCount('Drinks')},
      { name:'Salad',count:this.getCount('Salad')},
    ]
  }
  getAll() : Foods[]
  {
   return[
    {
      id:1,
      name:'Potato Meat',
      cookTime:'30-40',
      price:360,
      favourite:true,
      origins:['India','Dubai','Afghanistan'],
      star:4,
      imageUrl:'/assets/Image-1.jpg',
      tags:['Lunch','Dinner'],
    },
    {
      id:2,
      name:'Straberry Pasteries',
      cookTime:'15-20',
      price:250,
      favourite:true,
      origins:['France', 'Italy', 'Spain'],
      star:5,
      imageUrl:'/assets/Image-2.jpg',
      tags:['Dessert','FastFood','Breakfast'],
    },
    {
      id:3,
      name:'Greek Rice',
      cookTime:'10-20',
      price:230,
      favourite:false,
      origins:['Greek','France','Germany'],
      star:3,
      imageUrl:'/assets/Image-3.jpg',
      tags:['FastFood','Lunch','Dinner'],
    },
    {
      id:4,
      name:'Capricciosa Pizza',
      cookTime:'30-40',
      price:470,
      favourite:true,
      origins:['Egypt', 'Roman','Greek'],
      star:4,
      imageUrl:'/assets/Image-4.jpg',
      tags:['FastFood','Dinner','Snacks'],
    },
    {
      id:5,
      name:' Kothey momo',
      cookTime:'20-30',
      price:180,
      favourite:false,
      origins:['India','Nepal','Bhutan'],
      star:2,
      imageUrl:'/assets/Image-5.jpg',
      tags:['FastFood','Lunch','Dinner','Salad']
    },
    {
      id:6,
      name:'Wingreens Farm Burger',
      cookTime:'15-20',
      price:150,
      favourite:true,
      origins:['United States','Germany','Mexico'],
      star:4,
      imageUrl:'/assets/Image-6.jpg',
      tags:['FastFood','Lunch','Dinner','Breakfast','Snacks'],
    },
    {
      id:7,
      name:'Massaged Kale Salad',
      cookTime:'30-40',
      price:330,
      favourite:true,
      origins:['India','Mexican','Australia'],
      star:3,
      imageUrl:'/assets/Image-7.jpg',
      tags:['FastFood','Lunch','Dinner','Salad'],
    },
    {
      id:8,
      name:'Idli Sambar',
      cookTime:'10-20',
      price:120,
      favourite:false,
      origins:['India','Sri Lanka','Maldives'],
      star:5,
      imageUrl:'/assets/Image-8.jpg',
      tags:['FastFood','Dinner','Breakfast'],
    },
    {
      id:9,
      name:' Mushroom Cocktail ',
      cookTime:'10-20',
      price:200,
      favourite:true,
      origins:['England','Australia','New Zealand'],
      star:5,
      imageUrl:'/assets/Image-9.jpg',
      tags:['Dinner','Drinks'],
    }
   ]
  }
}
