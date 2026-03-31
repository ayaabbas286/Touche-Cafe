import {
  MenuItem,
  MenuServiceService,
} from './../Services/menu-service.service';
import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  menuService = inject(MenuServiceService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    setTimeout(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        this.scrollToFragment(fragment);
      }
    }, 1000);
  }
  scrollToFragment(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  ngOnInit() {
    this.showimg();
  }
  @HostListener('window:resize') onResize() {
    this.showimg();
  }
  // عددالصور في كل سلايد
  imggro: MenuItem[][] = [];
  imgnum = 4;

  showimg() {
    const width = window.innerWidth;
    const allitems = this.menuService.MenuItems();
    this.imggro = [];

    if (width <= 767) {
      this.imgnum = 1;
    } else if (width > 767 && width <= 991) {
      this.imgnum = 3;
    }
      
    else {
      {
        this.imgnum = 4;
      }
    }
    for (let i = 0; i < allitems.length; i += this.imgnum) {
      this.imggro.push(allitems.slice(i, i + this.imgnum));
    }
  }


}
