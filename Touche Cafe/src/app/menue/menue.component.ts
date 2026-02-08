import { MenuServiceService } from './../Services/menu-service.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-menue',
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './menue.component.html',
    styleUrl: './menue.component.css'
})
export class MenueComponent {
  menuService = inject(MenuServiceService)
 MenuItems = this.menuService.MenuItems
}
