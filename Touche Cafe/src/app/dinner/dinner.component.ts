import { Component } from '@angular/core';
interface IDinner{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}
@Component({
    selector: 'app-dinner',
    imports: [],
    templateUrl: './dinner.component.html',
    styleUrl: './dinner.component.css'
})
export class DinnerComponent {
dinners :IDinner[] = [
{
      id: 1,
      name: 'Grilled Steak',
      description: 'Premium beef steak with roasted vegetables and mashed potatoes.',
      price: 32,
      image: '/assets/Images/30.jpg',
      alt: 'Grilled Steak'
    },
    {
      id: 2,
      name: 'Salmon Fillet',
      description: 'Fresh Atlantic salmon with lemon butter sauce and rice.',
      price: 28,
      image: '/assets/Images/31.jpg',
      alt: 'Salmon Fillet'
    },
    {
      id: 3,
      name: 'Chicken Parmesan',
      description: 'Breaded chicken breast with marinara sauce and pasta.',
      price: 24,
      image: '/assets/Images/26.jpg',
      alt: 'Chicken Parmesan'
    },
    {
      id: 4,
      name: 'Lamb Chops',
      description: 'Herb-crusted lamb chops with mint sauce and vegetables.',
      price: 36,
      image: '/assets/Images/27.jpg',
      alt: 'Lamb Chops'
    },
    {
      id: 5,
      name: 'Seafood Risotto',
      description: 'Creamy risotto with mixed seafood and saffron.',
      price: 26,
      image: '/assets/Images/28.jpg',
      alt: 'Seafood Risotto'
    },
    {
      id: 6,
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with cherry sauce and roasted potatoes.',
      price: 30,
      image: '/assets/Images/29.jpg',
      alt: 'Duck Confit'
    }
]
}
