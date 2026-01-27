import { Component } from '@angular/core';
interface Imain{
    id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}
@Component({
    selector: 'app-main',
    imports: [],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent {
mains : Imain[] = [
{
      id: 1,
      name: 'Gourmet Burger',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati!',
      price: 15,
      image: '/assets/Images/27.jpg',
      alt: 'Burger'
    },
    {
      id: 2,
      name: 'Fusce id ante ut arcu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati!',
      price: 23,
      image: '/assets/Images/28.jpg',
      alt: 'Donut'
    },
    {
      id: 3,
      name: 'Fusce sed dolor eget tortor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati!',
      price: 16,
      image: '/assets/Images/29.jpg',
      alt: 'Croissant'
    },
    {
      id: 4,
      name: 'Fresh Breakfast Plate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati!',
      price: 15,
      image: '/assets/Images/30.jpg',
      alt: 'Breakfast'
    },
    {
      id: 5,
      name: 'Fusce id ante ut arcu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati!',
      price: 23,
      image: '/assets/Images/31.jpg',
      alt: 'Dinner'
    },
    {
      id: 6,
      name: 'Fusce sed dolor eget tortor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati!',
      price: 16,
      image: '/assets/Images/26.jpg',
      alt: 'Pancake'
    }
]
}
