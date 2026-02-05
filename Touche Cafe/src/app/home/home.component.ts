import { MenuServiceService } from './../Services/menu-service.service';
import { CommonModule } from '@angular/common';
import { Component, inject  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [CommonModule ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
 menuService = inject(MenuServiceService);
 private router = inject(Router);
 private route = inject (ActivatedRoute)


 constructor() {
  setTimeout(() => {
    const fragment = this.route.snapshot.fragment;
if(fragment){
  this.scrollToFragment(fragment)
}
  }, 1000);

 }
 scrollToFragment(fragment : string) {
   const el = document.getElementById(fragment);
   if(el){
    el.scrollIntoView({behavior: 'smooth', block: 'start' } );
   }
 }
}
 
