import { ReservationComponent } from './reservation/reservation.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewSettlerComponent } from './new-settler/new-settler.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenueComponent } from './menue/menue.component';
import { MainComponent } from './main/main.component';
import { DinnerComponent } from './dinner/dinner.component';
import { LunchComponent } from './lunch/lunch.component';
import { title } from 'process';
import { DrinksComponent } from './drinks/drinks.component';
import { TestDirComponent } from './test-dir/test-dir.component';

export const routes: Routes = [
{path:"", redirectTo:"home", title:'home', pathMatch:'full'},
{path:"home", component:HomeComponent,children:[
{path:"", component:MainComponent},
{path:"main", component:MainComponent},
{path:"dinner", component:DinnerComponent},
{path:"lunch", component:LunchComponent},
{path:"drinks", component:DrinksComponent }
]},
{path:"about-us", component:AboutComponent},
{path:"contact-us", component:ContactComponent},
{path:"navbar", component:NavbarComponent},
{path:"new-settler", component:NewSettlerComponent},
{path:"footer", component:FooterComponent},
{path:"gallery", component:GalleryComponent},
{path:"reservation", component:ReservationComponent, },
{path:"menu", component:MenueComponent, children:[
{path:"", component:MainComponent},
{path:"main", component:MainComponent},
{path:"dinner", component:DinnerComponent},
{path:"lunch", component:LunchComponent },
{path:"drinks", component:DrinksComponent }
]},
{path:"**", component:ErrorComponent}
];
