import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  slideIn = false;

  constructor() { }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY;
    // Adjust the condition based on when you want the slide effect to occur
    if (yOffset > 200) {
      this.slideIn = true;
    }
  }

  brands:{image:string}[]=[
    {
      image:'../../../../assets/logos/Pritty.jpg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/bodegaLaRural.jpg'
    },
    {
      image:'../../../../assets/logos/campari_logo_0_1_0.png'
    },
    {
      image:'../../../../assets/logos/Energizer-logo.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/marolio.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/pascual-toso.jpeg'
    },
    {
      image:'../../../../assets/logos/Pernod-Ricard-Simbolo.png'
    },
    {
      image:'../../../../assets/logos/speed.jpg'
    },
  ]
}
