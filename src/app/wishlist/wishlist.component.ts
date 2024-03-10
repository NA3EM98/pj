import { Component } from '@angular/core';
import { WishService } from '../wish.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
constructor(private _WishlistService: WishService, private _CartService: CartService, private _ToastrService: ToastrService) { }

  wishListItems: any[] = [];

  ngOnInit(): void {
    this._WishlistService.getUserWishList().subscribe({
      next: (response) => {

        this.wishListItems = response.data
        console.log(this.wishListItems);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
 dddd() {
    this._WishlistService.getUserWishList().subscribe({
      next: (response) => {

        this.wishListItems = response.data
        console.log(this.wishListItems);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  removeItem(id: string): void {
    this._WishlistService.RemoveFromWishList(id).subscribe({
      next: (response) => {
        this.dddd();
        this.wishListItems = response.data;
        this._WishlistService.wishcount.next(response.data.length)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  addCart(id: string): void {
    this._CartService.addproudact(id).subscribe({
      next: (response) => {
        this.removeItem(id);
this._CartService.cartnumber.next(response.numOfCartItems)
        this._ToastrService.success(response.message, 'Fresh Cart')
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
