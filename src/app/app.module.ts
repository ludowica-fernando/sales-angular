import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { HomeComponent } from './home/home.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ManageReturnsComponent } from './manage-returns/manage-returns.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageCustomerComponent,
    ManageEnquiryComponent,
    HomeComponent,
    ManageOrderComponent,
    ManageReturnsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'create-customer', component: ManageCustomerComponent },
      { path: 'create-enquiry', component: ManageEnquiryComponent },
      { path: 'create-order', component: ManageOrderComponent },
      { path: 'home', component: HomeComponent },
      { path: 'returns', component: ManageReturnsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
