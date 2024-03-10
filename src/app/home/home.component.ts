import { WishService } from './../wish.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserService } from './../user.service';
import { Component } from '@angular/core';
// import { Datum } from '../category';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Category, Products } from '../interface/products';
// import { Products } from '../interface/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private _userService: UserService,
    private _CartService: CartService,
    private _toster: ToastrService,
    private _WishService: WishService
  ) {}
  Proudactlist: Products[] = [];
  Categories: Category[] = [];
  search: string = '';
  wishListItems: any[] = [];

  ngOnInit(): void {
    this._userService.getprodect().subscribe({
      next: (Respon) => {
        this.Proudactlist = Respon.data;
      },
      error(err) {
        console.log(err);
      },
    });
    this._userService.getallcate().subscribe({
      next: (Respon) => {
        // console.log(Respon)
        this.Categories = Respon.data;
      },
    });
    this._WishService.getUserWishList().subscribe({
      next: (response) => {
        const newdata = response.data.map((item: any) => item._id);
        this.wishListItems = newdata;
        // console.log(this.wishListItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };
  mainslider: OwlOptions = {
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
