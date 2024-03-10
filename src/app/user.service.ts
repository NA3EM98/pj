import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) { }
  getprodect():Observable <any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
   getprodectdetails(id:any):Observable <any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getallcate():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
     getbrands():Observable <any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
    spcbrand(id:string):Observable <any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }
  getSubcategoriesOnCategory(id: string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
  }
}
