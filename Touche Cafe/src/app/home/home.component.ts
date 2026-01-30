import { MenuServiceService } from './../Services/menu-service.service';
import { CommonModule } from '@angular/common';
import { Component, inject  } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [CommonModule ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
 menuService = inject(MenuServiceService);
}
