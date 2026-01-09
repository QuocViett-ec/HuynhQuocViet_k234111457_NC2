import { Product } from './product';
import { Component, signal } from '@angular/core';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
  products: any;
  constructor(ps: ProductService) {
    this.products = ps.getAllProducts();
  }
}
