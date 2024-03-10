import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  wishcount:BehaviorSubject<number>= new BehaviorSubject(0);
token:any = {token:localStorage.getItem('eToken')!};

  constructor(private _HttpClient:HttpClient) { }
   addproudactto(id:string):Observable<any>{
  return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist` ,
    {productId:id},
   { headers:this.token}
    )
  }
  getUserWishList(): Observable<any> {

    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist",
      { headers: this.token },
    )
  }



 RemoveFromWishList(productId: string): Observable<any> {

    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      { headers: this.token },
    )
  }
}
