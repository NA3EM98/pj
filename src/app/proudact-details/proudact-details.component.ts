// import { Data } from './../interface/spfproudact';
// import { Proudact } from './../interface/proudact';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from '../interface/products';
import { CartService } from '../cart.service';
import { WishService } from '../wish.service';
import { ToastrService } from 'ngx-toastr';
// import { Proudact } from '../interface/proudact';

@Component({
  selector: 'app-proudact-details',
  templateUrl: './proudact-details.component.html',
  styleUrls: ['./proudact-details.component.scss'],
})
export class ProudactDetailsComponent {
  constructor(
    private _UserService: UserService,
    private route: ActivatedRoute,
    private _CartService: CartService,
    private _WishService: WishService,
    private _toster: ToastrService
  ) {}
  proudactdetails: any = {};
  wishListItems: any[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let Proudact_id = this.route.snapshot.params['id'];
    this._UserService.getprodectdetails(Proudact_id).subscribe({
      next: (Respons) => {
        console.log(Respons);
        this.proudactdetails = Respons.data;
      },
      error: (err) => {},
    });
  }
  deslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };
  addtocart(id: string) {
    this._CartService.addproudact(id).subscribe({
      next: (res) => {
        this._CartService.cartnumber.next(res.numOfCartItems);
        console.log(res);
        this._toster.success(res.message);
        this.removeItem(id);
      },
    });
  }
  addtowishlist(id: string) {
    this._WishService.addproudactto(id).subscribe({
      next: (res) => {
        this.wishListItems = res.data;
        this._WishService.wishcount.next(res.data.length);
        console.log(res);
        this._toster.success(res.message);
      },
    });
  }

  removeItem(id: string): void {
    this._WishService.RemoveFromWishList(id).subscribe({
      next: (response) => {
        this.wishListItems = response.data;
        this._WishService.wishcount.next(response.data.length);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
