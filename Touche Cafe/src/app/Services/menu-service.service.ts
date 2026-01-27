import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category:string;
  description: string;
  imageUrl:string;
}
@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
dbUrl = '/assets/Data/data.json';
}
