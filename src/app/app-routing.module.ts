import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './shared/components/brands/brands.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { FindUsComponent } from './shared/components/find-us/find-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Distribuidora Full Point'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Distribuidora Full Point'
  },
  {
  path: 'brands',
  component: BrandsComponent,
  title: 'Representaciones'
  },
  {
  path: 'aboutUs',
  component: AboutUsComponent,
  title: 'Sobre Nosotros'
  },
  {
  path: 'findUs',
  component: FindUsComponent,
  title: 'Donde estamos'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
