import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SanasanaComponent } from './sanasana/sanasana.component';
import { LustrelabsComponent } from './lustrelabs/lustrelabs.component';
import { LegallensComponent } from './legallens/legallens.component';
import { SatorealityComponent } from './satoreality/satoreality.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'sanasana', component: SanasanaComponent },
    {path: 'lustrelabs', component: LustrelabsComponent },
    {path: 'legallens', component: LegallensComponent },
    {path: 'satoreality', component: SatorealityComponent },
];
