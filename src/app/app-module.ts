import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Gpa } from './gpa/gpa';
import { FormsModule } from '@angular/forms';
import { Ptb2 } from './ptb2/ptb2';
import { LearnDitective } from './learn-directive/learn-ditective';
import { ListProduct1 } from './list-product-1/list-product-1';
import { ListProduct2 } from './list-product-2/list-product-2';
import { Customer } from './customer/customer';
import { ListProduct3 } from './list-product-3/list-product-3';
import { Ex15 } from './ex15/ex15';
import { Ex18 } from './ex18/ex18';

@NgModule({
  declarations: [
    App,
    About,
    Contact,
    Mybinding,
    Ptb1,
    Gpa,
    Ptb2,
    LearnDitective,
    ListProduct1,
    ListProduct2,
    Customer,
    ListProduct3,
    Ex15,
    Ex18,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
