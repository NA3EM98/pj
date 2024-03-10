import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlanckLayoutComponent } from './blanck-layout/blanck-layout.component';
import { HomeComponent } from './home/home.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { CategoryComponent } from './category/category.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProudactDetailsComponent } from './proudact-details/proudact-details.component';
import { firstGuard } from './first.guard';
import { MycartComponent } from './mycart/mycart.component';
import { ProudactsComponent } from './proudacts/proudacts.component';
import { BrandsComponent } from './brands/brands.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [firstGuard],
    component: BlanckLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: MycartComponent },
      { path: 'prodects', component: ProudactsComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product/:id', component: ProudactDetailsComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'checkout/:id', component: CheckoutComponent },
      { path: 'allorders', component: AllOrdersComponent },
    ],
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'signin', component: SinginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'Forgotpassword', component: ForgotPasswordComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
