import { Component } from '@angular/core';
interface ILunch{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}
@Component({
  selector: 'app-lunch',
  standalone: true,
  imports: [],
  templateUrl: './lunch.component.html',
  styleUrl: './lunch.component.css'
})
export class LunchComponent {
lunches: ILunch[] = [
{
      id: 1,
      name: 'Grilled Chicken Salad',
      description: 'Fresh greens with grilled chicken, tomatoes, and house dressing.',
      price: 18,
      image: '/assets/Images/26.jpg',
      alt: 'Grilled Chicken Salad'
    },
    {
      id: 2,
      name: 'Club Sandwich',
      description: 'Triple-layer sandwich with bacon, lettuce, tomato, and mayo.',
      price: 12,
      image: '/assets/Images/27.jpg',
      alt: 'Club Sandwich'
    },
    {
      id: 3,
      name: 'Pasta Primavera',
      description: 'Fresh pasta with seasonal vegetables in light cream sauce.',
      price: 16,
      image: '/assets/Images/28.jpg',
      alt: 'Pasta Primavera'
    },
    {
      id: 4,
      name: 'Caesar Wrap',
      description: 'Crispy chicken, romaine lettuce, parmesan in tortilla wrap.',
      price: 14,
      image: '/assets/Images/29.jpg',
      alt: 'Caesar Wrap'
    },
    {
      id: 5,
      name: 'Fish Tacos',
      description: 'Grilled fish with cabbage slaw and spicy mayo in corn tortillas.',
      price: 15,
      image: '/assets/Images/30.jpg',
      alt: 'Fish Tacos'
    },
    {
      id: 6,
      name: 'Quinoa Bowl',
      description: 'Nutritious quinoa with roasted vegetables and tahini dressing.',
      price: 17,
      image: '/assets/Images/31.jpg',
      alt: 'Quinoa Bowl'
    }
]
}
