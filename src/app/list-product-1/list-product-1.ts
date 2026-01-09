import { ProductService } from './../product-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product-1',
  standalone: false,
  templateUrl: './list-product-1.html',
  styleUrl: './list-product-1.css',
})
export class ListProduct1 {
  products: any;
     constructor(ps: ProductService) {
       this.products = ps.getAllProducts();
     }
}
