import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartid!: any;
  constructor(
    private _cartService: CartService,
    private _FormBuilder: FormBuilder,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartid = params.get('id');
      },
    });
  }
  checkoutFORM: FormGroup = this._FormBuilder.group({
    details: [''],
    phone: [''],
    city: [''],
  });
  show() {
    console.log(this.checkoutFORM.value);
    this._cartService.checkout(this.cartid, this.checkoutFORM.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == 'success') {
          window.open(res.session.url, `_self`);
        }
      },
    });
  }
}
