import { AuthService } from '../auth.service';
import { WishService } from '../wish.service';
import { CartService } from './../cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-blanck',
  templateUrl: './nav-blanck.component.html',
  styleUrls: ['./nav-blanck.component.scss'],
})
export class NavBlanckComponent {
  constructor(
    private _CartService: CartService,
    private _WishlistService: WishService,
    private _AuthService: AuthService
  ) {}
  count: number = 0;
  wishcount: number = 0;
  ngOnInit(): void {
    this._CartService.getcart().subscribe({
      next: (res) => {
        // console.log(res.data)
        this.count = res.data.products.length;
      },
    });

    this._CartService.cartnumber.subscribe({
      next: (value) => {
        this.count = value;
      },
    });
    this._WishlistService.getUserWishList().subscribe({
      next: (response) => {
        this.wishcount = response.data.length;
        console.log(response.data);
      },
    });
    this._WishlistService.wishcount.subscribe({
      next: (value) => {
        this.wishcount = value;
      },
    });
  }
  logout() {
    this._AuthService.logOut();
  }
}
