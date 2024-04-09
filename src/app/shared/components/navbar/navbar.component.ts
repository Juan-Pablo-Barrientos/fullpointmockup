import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { faBullhorn, faCloudSun, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideInAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-250%)' }),
        animate('0.8s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  faPencil=faPencil
  faBullhorn=faBullhorn
  faCloudSun=faCloudSun

  isNavbarSmall: boolean = false;
  isNavbarOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarSmall = (window.scrollY < 0);
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  scrollToComponent(componentId: string): void {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
