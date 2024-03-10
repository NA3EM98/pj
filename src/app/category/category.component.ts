// import { Datum } from '../category';
import { Category, Subcategory } from '../interface/products';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  Category:Category[]= []
  subCategories: Subcategory[] = [];
  clicked: boolean = false;
constructor(private _UserService:UserService){}
ngOnInit(): void {
    this._UserService.getallcate().subscribe({
      next:(res)=>{
        this.Category=res.data
      }
    })
}
subCategory(id: string): void {
    this._UserService.getSubcategoriesOnCategory(id).subscribe({
      next: (response) => {
        this.clicked = true;

        this.subCategories = response.data;
        console.log(this.subCategories);
      }
    })
  }
}
