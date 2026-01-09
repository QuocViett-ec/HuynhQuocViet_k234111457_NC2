import { Component } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-list-product-2',
  standalone: false,
  templateUrl: './list-product-2.html',
  styleUrl: './list-product-2.css',
})
export class ListProduct2 {
 products: any;
   constructor(ps: ProductService) {
     this.products = ps.getAllProducts();
   }
}
