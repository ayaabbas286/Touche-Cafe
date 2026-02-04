import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryImage {
  id: number;
  url: string;
  category: 'interior' | 'food' | 'events';
  alt: string;
}
@Component({
    selector: 'app-gallery',
    imports: [CommonModule  ],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.css'
})
export class GalleryComponent {
// بيانات الصور (استبدل الروابط بصورك الحقيقية)
  allImages: GalleryImage[] = [
    { id: 1, url: 'assets/Gallery/1.jpg', category: 'interior', alt: 'Main Hall' },
    { id: 2, url: 'assets/Gallery/2.jpg', category: 'food', alt: 'Signature Burger' },
    { id: 3, url: 'assets/Gallery/5.jpg', category: 'events', alt: 'Live Jazz Band' },
    { id: 4, url: 'assets/Gallery/4.jpg', category: 'food', alt: 'Espresso Art' },
    { id: 5, url: 'assets/Gallery/3.jpg', category: 'interior', alt: 'Cozy Corner' },
    { id: 6, url: 'assets/Gallery/6.jpg', category: 'food', alt: 'Pancakes' },
    { id: 7, url: 'assets/Gallery/7.jpg', category: 'events', alt: 'Private Party' },
    { id: 8, url: 'assets/Gallery/8.jpg', category: 'interior', alt: 'Outdoor Seating' },
  ];

  filteredImages: GalleryImage[] = [...this.allImages];
  currentFilter: string = 'all';
  selectedImage: GalleryImage | null = null;

  filterGallery(category: string) {
    this.currentFilter = category;
    if (category === 'all') {
      this.filteredImages = this.allImages;
    } else {
      this.filteredImages = this.allImages.filter(img => img.category === category);
    }
  }

  openLightbox(img: GalleryImage) {
    this.selectedImage = img;
    document.body.style.overflow = 'hidden'; // منع السكرول للصفحة الخلفية
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto'; // إعادة السكرول
  }
}
