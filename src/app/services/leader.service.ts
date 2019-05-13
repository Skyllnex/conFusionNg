import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[]{
  	return LEADERS;
  }
  
  //cambiado el filter por find
  getLeader(id: string): Leader {
    return LEADERS.find((leader) => (leader.id === id));
  }

  getFeaturedLeader(): Leader {
    return LEADERS.find((leader) => leader.featured);
  }
}
