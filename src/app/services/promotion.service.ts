import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {
    return PROMOTIONS.find((promo) => (promo.id === id));
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.find((promotion) => promotion.featured);
  }
}
