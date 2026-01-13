import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex10 } from './ex10/ex10';
import { About } from './about/about';
import { ListProduct1 } from './list-product-1/list-product-1';
import { ListProduct2 } from './list-product-2/list-product-2';
import { ListProduct3 } from './list-product-3/list-product-3';

const routes: Routes = [
  { path: 'ABOUT', component: About },
  { path: 'EX10', component: Ex10 },
  { path: 'product-1', component: ListProduct1 },
  { path: 'product-2', component: ListProduct2 },
  { path: 'product-3', component: ListProduct3 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
