import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent  implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;

  goToSlide(slideId: string): void {
    this.carousel.select(slideId);
  }

  ngAfterViewInit(): void {
    this.carousel.pause(); // Optionally, you can pause the carousel initially
  }
}
