import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, computed } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  private MenuUrl = 'assets/Data/data.json';
  private _httpClient = inject(HttpClient);

  private menuData$ = this._httpClient.get<MenuItem[]>(this.MenuUrl).pipe(shareReplay(1));

  MenuItems = toSignal(this.menuData$, { initialValue: [] });

  FeaturedMenu = computed(() => {
    return this.MenuItems().filter(item => item.featured);
  });

  selectedCategory = signal<string>('mains');

  filteredMenu = computed(() => {
    const items = this.MenuItems();
    const category = this.selectedCategory();
    return items.filter(item => item.category === category);
  });

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }

}
