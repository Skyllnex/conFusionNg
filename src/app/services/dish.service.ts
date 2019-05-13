import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[]{
  	return DISHES;
  }
  
  //cambiado el filter por find
  getDish(id: string): Dish {
    return DISHES.find((dish) => (dish.id === id));
  }

  getFeaturedDish(): Dish {
    return DISHES.find((dish) => dish.featured);
  }
}
