import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
HttpClient;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  userData: string | null = null;

  logOut(): void {
    localStorage.removeItem('eToken');
    this._Router.navigate(['/signin']);
  }

  saveDecodeUserData() {
    if (localStorage.getItem('eToken') != null) {
      let encodeToken: any = JSON.stringify(localStorage.getItem('eToken'));
      let decodeToken: string = jwtDecode(encodeToken);
      this.userData = decodeToken;
      console.log(decodeToken);
    }
  }

  senddataup(userdata: any): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userdata
    );
  }

  senddatain(logindata: any): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      logindata
    );
  }
  forgotPassword(userData: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      userData
    );
  }
  verifyCode(userData: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
      userData
    );
  }
  resetPAssword(userData: object): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      userData
    );
  }
}
