import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent {
  constructor(
    private _CartService: CartService,
    private _AuthService: AuthService
  ) {}
  allord: any = [];
  ngOnInit() {
    // this._CartService.getallor(this._AuthService?.userData?._id);
  }
}
