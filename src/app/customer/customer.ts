import { Component } from '@angular/core';
import { CustomerService } from '../customer-service';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  products: any;
  constructor(ps: CustomerService) {
    this.products = ps.getAllProducts();
  }
}
