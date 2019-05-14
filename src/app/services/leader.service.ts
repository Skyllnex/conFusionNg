import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
  	return Promise.resolve(LEADERS);
  }
  
  //cambiado el filter por find
  getLeader(id: string): Promise<Leader> {
    return Promise.resolve(LEADERS.find((leader) => (leader.id === id)));
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.find((leader) => leader.featured));
  }
}
