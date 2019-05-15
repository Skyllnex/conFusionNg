import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPROMOTIONS(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }
  
  //cambiado el filter por find
  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.find((promotion) => (promotion.id === id))).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.find((promotion) => promotion.featured)).pipe(delay(2000));
  }
}
