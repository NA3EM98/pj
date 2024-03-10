// import { Proudact } from './../interface/proudact';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Products } from '../interface/products';
import { CartService } from '../cart.service';
import { WishService } from '../wish.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proudacts',
  templateUrl: './proudacts.component.html',
  styleUrls: ['./proudacts.component.scss']
})
export class ProudactsComponent implements OnInit{
constructor(private _UserService:UserService , private _CartService:CartService , private _WishService:WishService , private _toster:ToastrService){}
search:string=''
Proudactlist:Products[]=[]
  wishListItems: any[] = [];

ngOnInit(): void {
    this._UserService.getprodect().subscribe({
      next:(res)=>{
this.Proudactlist=res.data;
console.log(res)
      }
    })
}
 addtocart(id:string){
    this._CartService.addproudact(id).subscribe({
      next:(res)=>{
this._CartService.cartnumber.next(res.numOfCartItems)
        console.log(res)
        this._toster.success(res.message)
                this.removeItem(id);

      }
    })
  }

  addtowishlist(id:string){
    this._WishService.addproudactto(id).subscribe({
      next:(res)=>{

        this.wishListItems = res.data
this._WishService.wishcount.next(res.data.length)
        console.log(res)
        this._toster.success(res.message)
      }
    })
  }
  removeItem(id: string): void {
    this._WishService.RemoveFromWishList(id).subscribe({
      next: (response) => {
        this.wishListItems = response.data;
                this._WishService.wishcount.next(response.data.length)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
