import { MenuServiceService } from './../Services/menu-service.service';
import { Component, inject } from '@angular/core';

@Component({
    selector: 'app-menue',
    imports: [],
    templateUrl: './menue.component.html',
    styleUrl: './menue.component.css'
})
export class MenueComponent {
  menuService = inject(MenuServiceService)
 MenuItems = this.menuService.MenuItems
}
