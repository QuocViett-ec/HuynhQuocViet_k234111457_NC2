import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http-service';

@Component({
  selector: 'app-list-product-3',
  standalone: false,
  templateUrl: './list-product-3.html',
  styleUrl: './list-product-3.css',
})
export class ListProduct3 {
  products: any;
  constructor(private pshttp: ProductHttpService) 
  {
    this.pshttp.get_all_products().subscribe( {
      next: (data) => {
        this.products = data;
      }
    });
  }
}