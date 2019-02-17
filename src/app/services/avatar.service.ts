import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  public avatars: Array<object> = [
    {
      name: 'erik',
      image: 'https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_spiderman_marvel_spider_man-512.png',
      estimatedValue: 23
    },
    {
      name: 'ease',
      image: 'https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_spiderman_marvel_spider_man-512.png',
      estimatedValue: 12
    },
  ];
  constructor() { }
}
