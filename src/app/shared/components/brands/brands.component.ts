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

  brands:{image:string, name:string}[]=[
    {
      image:'../../../../assets/prittyLogo.jpg',
      name:'Pritty'},
    {
      image:'https://www.fernet.com.uy/wp-content/uploads/2011/08/fernet-branca-logo.jpg',
      name:'Fernet Branca'},
    {
      image:'https://d245euu0fln19d.cloudfront.net/headers/1111760956.tmp',
      name:'Doble Cola'},
    {
      image:'https://www.pritty.com.ar/img/productos/logos/parcial_livra.png',
      name:'Livra'},
    {
      image:'https://www.pritty.com.ar/img/productos/logos/parcial_magna.png',
      name:'Magna'},
    {
      image:'../../../../assets/villaSanRemo.png',
      name:'Villa San Remo'},
    {
      image:'https://www.pritty.com.ar/img/productos/logos/parcial_sodasaldan.png',
      name:'Saldan'},
    {
      image:'../../../../assets/baggio.png',
      name:'Baggio'},
    {
      image:'../../../../assets/speed.png',
      name:'Speed'},
    {
      image:'../../../../assets/toro.jpg',
      name:'Vino Toro'},
    {
    image:'../../../../assets/estanciaMendoza.jpg',
    name:'Estancia Mendoza'},
    {
    image:'../../../../assets/norton.jpg',
    name:'Estancia Norton'},
    {
    image:'../../../../assets/cafayateEtchart.jpeg',
    name:'Bodegas Etchart'},
    {
    image:'../../../../assets/bodegaLaRural.jpg',
    name:'Bodega La Rural'},
    {
    image:'../../../../assets/federicoDeAlvear.png',
    name:'Federico De Alvear'},
    {
    image:'../../../../assets/campari.png',
    name:'Campari'},
    {
    image:'../../../../assets/absolut.png',
    name:'Absolut.'},
    {
    image:'../../../../assets/sernova.jpeg',
    name:'Sernova Vodka'},
    {
    image:'../../../../assets/skyyVodka.png',
    name:'Skyy Vodka'},
    {
    image:'../../../../assets/cachacaPitu.jpg',
    name:'Cachaca Pitu'},
    {
    image:'../../../../assets/larios.png',
    name:'Larios'},
    {
    image:'../../../../assets/beefeater.jpg',
    name:'Beefeater'},
    {
    image:'../../../../assets/orloff.png',
    name:'Orloff'},
    {
    image:'../../../../assets/brighton.jpg',
    name:'Brighton'},
    {
    image:'../../../../assets/malibu.png',
    name:'Malibu Coco'},
    {
    image:'../../../../assets/havanaClub.png',
    name:'Havana Club'},
    {
    image:'../../../../assets/hiramWalker.png',
    name:'Hiram Walker'},
    {
    image:'../../../../assets/buheroNegro.png',
    name:'Buhero Negro'},
    {
    image:'../../../../assets/tiaMaria.jpg',
    name:'Tia Maria'},
    {
    image:'../../../../assets/jimBeam.png',
    name:'Jim Beam'},
    {
    image:'../../../../assets/pipers.jpg',
    name:'100 Pipers'},
    {
    image:'../../../../assets/jameson.png',
    name:'Jameson'},
    {
    image:'../../../../assets/grants.png',
    name:'Grants'},
    {
    image:'../../../../assets/dobleV.png',
    name:'Doble V'},
    {
    image:'../../../../assets/blenders.png',
    name:'Blenders'},
    {
    image:'../../../../assets/chivas.jpg',
    name:'Chivas'},
    {
    image:'../../../../assets/cusenier.jpeg',
    name:'Cusenier'},
    {
    image:'../../../../assets/oldSmuggler.png',
    name:'Old Smuggler'},
    {
    image:'../../../../assets/energizer.png',
    name:'Energizer'},
    {
    image:'../../../../assets/eveready.png',
    name:'Eveready'},
    {
      image:'../../../../assets/prittyLogo.jpg',
      name:'Pritty'},
    {
      image:'https://www.fernet.com.uy/wp-content/uploads/2011/08/fernet-branca-logo.jpg',
      name:'Fernet Branca'},
    {
      image:'https://d245euu0fln19d.cloudfront.net/headers/1111760956.tmp',
      name:'Doble Cola'},
    {
      image:'https://www.pritty.com.ar/img/productos/logos/parcial_livra.png',
      name:'Livra'},
    {
      image:'https://www.pritty.com.ar/img/productos/logos/parcial_magna.png',
      name:'Magna'},
    {
      image:'../../../../assets/villaSanRemo.png',
      name:'Villa San Remo'},
    {
      image:'https://www.pritty.com.ar/img/productos/logos/parcial_sodasaldan.png',
      name:'Saldan'},
  ]
}
