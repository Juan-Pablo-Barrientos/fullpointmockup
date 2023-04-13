import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock, faHouse, faMailBulk, faPaperclip, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faGithub = faGithub;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faHouse= faHouse;
  faPhone= faPhone;
  faMail= faMailBulk
  faClock=faClock
  faPaper=faPaperclip

  constructor() { }

  ngOnInit(): void {
  }

}
