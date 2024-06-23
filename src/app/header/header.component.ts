import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuLinks = [
    { path: '', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'contact', label: 'Contact'}

  ];

}
