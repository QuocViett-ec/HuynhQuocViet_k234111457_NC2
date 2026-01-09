import { Component } from '@angular/core';
import { Ex18Service } from '../ex18-service';

@Component({
  selector: 'app-ex18',
  standalone: false,
  templateUrl: './ex18.html',
  styleUrl: './ex18.css',
})
export class Ex18 {
  data: any;
  constructor(private ex18Service: Ex18Service) {
    console.log('Ex18 constructor called');
    this.ex18Service.getCustomerTypes().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.data = data;
      },
      error: (err) => {
        console.error('Error loading data:', err);
      },
    });
  }
}
