import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MegaMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular19_flowbite';

  ngOnInit(): void {
    initFlowbite();
  }
}
