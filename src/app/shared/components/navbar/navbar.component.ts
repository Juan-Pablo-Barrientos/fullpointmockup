import { Component, OnInit } from '@angular/core';
import { faBullhorn, faCloudSun, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faPencil=faPencil
  faBullhorn=faBullhorn
  faCloudSun=faCloudSun

  constructor() { }

  ngOnInit(): void {
  }

}
