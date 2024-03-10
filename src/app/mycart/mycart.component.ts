import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss'],
})
export class MycartComponent implements OnInit {
  cartitem: any = {};
  perm_identity: any;
  constructor(private _CartService: CartService) {}
  ngOnInit(): void {
    this._CartService.getcart().subscribe({
      next: (res) => {
        this.perm_identity = res;
        this.cartitem = res.data;
      },
    });
  }
  removeitem(id: string) {
    this._CartService.removeitem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartitem = res.data;
        this._CartService.cartnumber.next(res.numOfCartItems);
      },
    });
  }
  updateunits(id: string, count: number) {
    this._CartService.updateQuantity(count, id).subscribe({
      next: (res) => {
        this.cartitem = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  clearCart(): void {
    this._CartService.clearAllCart().subscribe({
      next: (response) => {
        this.cartitem = response;
        console.log(this.cartitem);
        this._CartService.cartnumber.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
