import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { NavBlanckComponent } from './nav-blanck/nav-blanck.component';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from './profile/profile.component';
import { MycartComponent } from './mycart/mycart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlanckLayoutComponent } from './blanck-layout/blanck-layout.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr'
import   { HttpClientModule } from '@angular/common/http';
import { ProudactDetailsComponent } from './proudact-details/proudact-details.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TextCutPipe } from './text-cut.pipe';
import { SearchPipe } from './search.pipe';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ProudactsComponent } from './proudacts/proudacts.component';
import { WishredPipe } from './wishred.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    NavAuthComponent,
    NavBlanckComponent,
    CategoryComponent,
    ProfileComponent,
    MycartComponent,
    WishlistComponent,
    SinginComponent,
    SignupComponent,
    FooterComponent,
    ProdectsComponent,
    AuthLayoutComponent,
    BlanckLayoutComponent,
    NotfoundComponent,
    ProudactDetailsComponent,
    TextCutPipe,
    SearchPipe,
    ProudactsComponent,
    WishredPipe,
    CheckoutComponent,
    ForgotPasswordComponent,
    AllOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  CarouselModule,
  FormsModule,
  CommonModule,
  ToastrModule.forRoot(),
	RxReactiveFormsModule
  ],
  providers: [ provideAnimations(),
  provideToastr(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
