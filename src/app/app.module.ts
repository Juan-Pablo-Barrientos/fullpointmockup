import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { BrandsComponent } from './shared/components/brands/brands.component';
import { FindUsComponent } from './shared/components/find-us/find-us.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { SendCVComponent } from './shared/components/sendCV/sendCV.component';
import { ContactFormComponent } from './shared/components/contactForm/contactForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BrandsComponent,
    FindUsComponent,
    AboutUsComponent,
    SendCVComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
