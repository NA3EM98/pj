import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Brand } from '../interface/products';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands:Brand[]=[]
  brandsg:any= {}
  ko:boolean=false
constructor(private _UserService:UserService){}
ngOnInit(): void {
    this._UserService.getbrands().subscribe({
      next:(res)=>{
this.brands = res.data;
      }
    })
}
ji(id:string){
  this._UserService.spcbrand(id).subscribe({
    next:(res)=>{
      this.ko=true
this.brandsg=res.data
  }
  })
}
}
