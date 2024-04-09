import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToComponent(componentId: string): void {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
