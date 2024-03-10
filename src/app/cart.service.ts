import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartnumber: BehaviorSubject<number> = new BehaviorSubject(0);
  token: any = { token: localStorage.getItem('eToken')! };
  constructor(private _HttpClient: HttpClient) {}
  addproudact(id: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: id },
      { headers: this.token }
    );
  }
  getcart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: this.token,
    });
  }
  removeitem(id: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { headers: this.token }
    );
  }
  updateQuantity(quantity: number, id: string): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count: quantity },
      { headers: this.token }
    );
  }
  clearAllCart(): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { headers: this.token }
    );
  }
  creatcashord(cartid: string, form: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartid}`,
      { shippingAddress: form },
      {
        headers: this.token,
      }
    );
  }
  checkout(cartid: string, form: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:4200`,
      { shippingAddress: form },
      {
        headers: this.token,
      }
    );
  }
  getallor(id: any): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
    );
  }
}
