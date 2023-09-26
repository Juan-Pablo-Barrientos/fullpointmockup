import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  slideIn = false;
  subscribedTimer!:Subscription;
  brands2:{image:string}[]=[
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    },
    {
      image:'../../../../assets/logos/baggio.png'
    },
    {
      image:'../../../../assets/logos/fecovita.png'
    },
    {
      image:'../../../../assets/logos/LOGO_BRANCA_FERNET.png'
    },
    {
      image:'../../../../assets/logos/NORTON-LOGO.jpeg'
    }
  ]
  brands:{image:string}[]=[
    {
      image:'../../../../assets/PRITTY2023.jpeg'
    },
    {
      image:'../../../../assets/logos/Pernod-Ricard-Simbolo.png'
    },
    {
      image:'../../../../assets/logos/campari_logo_0_1_0.png'
    },
    {
      image:'../../../../assets/bodegaLaRural.jpg'
    },
    {
      image:'../../../../assets/logos/Energizer-logo.png'
    },
    {
      image:'../../../../assets/logos/speed.jpg'
    },
    {
      image:'../../../../assets/logos/pascual-toso.jpeg'
    },
    {
      image:'../../../../assets/logos/marolio.png'
    },
    {
      image:'../../../../assets/logos/Pernod-Ricard-Simbolo.png'
    },
    {
      image:'../../../../assets/logos/campari_logo_0_1_0.png'
    },
    {
      image:'../../../../assets/bodegaLaRural.jpg'
    },
    {
      image:'../../../../assets/logos/Energizer-logo.png'
    },
    {
      image:'../../../../assets/logos/speed.jpg'
    },
    {
      image:'../../../../assets/logos/pascual-toso.jpeg'
    },
    {
      image:'../../../../assets/logos/marolio.png'
    },
    {
      image:'../../../../assets/logos/Pernod-Ricard-Simbolo.png'
    },
    {
      image:'../../../../assets/logos/campari_logo_0_1_0.png'
    },
    {
      image:'../../../../assets/bodegaLaRural.jpg'
    },
    {
      image:'../../../../assets/logos/Energizer-logo.png'
    },
    {
      image:'../../../../assets/logos/speed.jpg'
    },
    {
      image:'../../../../assets/logos/pascual-toso.jpeg'
    },
    {
      image:'../../../../assets/logos/marolio.png'
    },
    {
      image:'../../../../assets/logos/Pernod-Ricard-Simbolo.png'
    },
    {
      image:'../../../../assets/logos/campari_logo_0_1_0.png'
    },
    {
      image:'../../../../assets/bodegaLaRural.jpg'
    },
    {
      image:'../../../../assets/logos/Energizer-logo.png'
    },
    {
      image:'../../../../assets/logos/speed.jpg'
    },
    {
      image:'../../../../assets/logos/pascual-toso.jpeg'
    },
    {
      image:'../../../../assets/logos/marolio.png'
    },
    {
      image:'../../../../assets/logos/Pernod-Ricard-Simbolo.png'
    },
    {
      image:'../../../../assets/logos/campari_logo_0_1_0.png'
    },
    {
      image:'../../../../assets/bodegaLaRural.jpg'
    },
    {
      image:'../../../../assets/logos/Energizer-logo.png'
    },
    {
      image:'../../../../assets/logos/speed.jpg'
    },
    {
      image:'../../../../assets/logos/pascual-toso.jpeg'
    },
    {
      image:'../../../../assets/logos/marolio.png'
    },
    {
      image:'../../../../assets/logos/Pernod-Ricard-Simbolo.png'
    },
    {
      image:'../../../../assets/logos/campari_logo_0_1_0.png'
    },
    {
      image:'../../../../assets/bodegaLaRural.jpg'
    },
    {
      image:'../../../../assets/logos/Energizer-logo.png'
    },
    {
      image:'../../../../assets/logos/speed.jpg'
    },
    {
      image:'../../../../assets/logos/pascual-toso.jpeg'
    },
    {
      image:'../../../../assets/logos/marolio.png'
    },
  ]

  constructor() { }
  ngOnInit(): void {
    this.rotateSushiBelt();
  }

  rotateSushiBelt(): void {
    const sushiBelt = document.querySelector('.sushi-belt') as HTMLElement;
    const sushiBelt2 = document.querySelector('.sushi-belt2') as HTMLElement;
    let currentPosition = 0;
    const plateWidth = 250; // Adjust the plate width according to your design
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      currentPosition -= (plateWidth * deltaTime) / 2000; // Calculate the position change per second

      sushiBelt.style.transform = `translateX(${currentPosition}px`;
      sushiBelt2.style.transform = `translateX(${currentPosition}px`;

      // Check if the belt has looped
      if (currentPosition < -plateWidth * (this.brands.length - 10)) {
        currentPosition = 0;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY;
    // Adjust the condition based on when you want the slide effect to occur
    if (yOffset > 200) {
      this.slideIn = true;
    }
  }


}
