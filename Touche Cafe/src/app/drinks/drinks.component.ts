import { Component } from '@angular/core';
interface IDrink {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}
@Component({
    selector: 'app-drinks',
    imports: [],
    templateUrl: './drinks.component.html',
    styleUrl: './drinks.component.css'
})
export class DrinksComponent {
 drinks: IDrink[] = [
 {
      id: 1,
      name: 'Cappuccino',
      description: 'Rich espresso with steamed milk foam and cocoa powder.',
      price: 5,
      image: '/assets/Images/28.jpg',
      alt: 'Cappuccino'
    },
    {
      id: 2,
      name: 'Fresh Lemonade',
      description: 'Freshly squeezed lemons with mint and sparkling water.',
      price: 4,
      image: '/assets/Images/29.jpg',
      alt: 'Fresh Lemonade'
    },
    {
      id: 3,
      name: 'Iced Tea',
      description: 'Refreshing iced tea with lemon slices and fresh herbs.',
      price: 3,
      image: '/assets/Images/30.jpg',
      alt: 'Iced Tea'
    },
    {
      id: 4,
      name: 'Hot Chocolate',
      description: 'Rich hot chocolate with whipped cream and marshmallows.',
      price: 6,
      image: '/assets/Images/31.jpg',
      alt: 'Hot Chocolate'
    },
    {
      id: 5,
      name: 'Espresso Macchiato',
      description: 'Strong espresso shot with a dollop of steamed milk foam.',
      price: 4,
      image: '/assets/Images/26.jpg',
      alt: 'Espresso Macchiato'
    },
    {
      id: 6,
      name: 'Fruit Smoothie',
      description: 'Blend of fresh seasonal fruits with yogurt and honey.',
      price: 7,
      image: '/assets/Images/27.jpg',
      alt: 'Fruit Smoothie'
    }
 ]
}
