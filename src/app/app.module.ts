import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { HomeComponent } from './home/home.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ManageReturnsComponent } from './manage-returns/manage-returns.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewOrderComponent } from './view-order/view-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageCustomerComponent,
    ManageEnquiryComponent,
    HomeComponent,
    ManageOrderComponent,
    ManageReturnsComponent,
    NavbarComponent,
    ViewCustomerComponent,
    ViewEnquiryComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'customers/new', component: ManageCustomerComponent },
      { path: 'customers/:id', component: ManageCustomerComponent },
      { path: 'customers', component: ViewCustomerComponent },
      { path: 'create-enquiry', component: ManageEnquiryComponent },
      { path: 'create-order', component: ManageOrderComponent },
      { path: 'home', component: HomeComponent },
      { path: 'returns', component: ManageReturnsComponent },
      { path: 'view-enquiry', component: ViewEnquiryComponent },
      { path: 'view-order', component: ViewOrderComponent }
    ])
  ],
  providers: [
    CustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
