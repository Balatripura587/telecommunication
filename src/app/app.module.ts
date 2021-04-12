import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { FormsModule, FormGroup, FormControl } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { SupportComponent } from './support/support.component';
// import { NewpostpaidComponent } from './Landline/newpostpaid/newpostpaid.component';
// import { NewprepaidComponent } from './Landline/newprepaid/newprepaid.component';
import {NewprepaidComponent} from './newprepaid/newprepaid.component';
import { NewpostpaidComponent} from './newpostpaid/newpostpaid.component'
// import { PaybillComponent } from './Landline/paybill/paybill.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
// import { RechargeComponent } from './Landline/recharge/recharge.component';
// import { PrepaidplansComponent } from './Landline/prepaidplans/prepaidplans.component';
import { PaybillsComponent } from './Landline/paybills/paybills.component';
import { SuccessfulComponent } from './successful/successful.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { PrepaidplansService} from './prepaidplans.service';
import { SimrequestService } from './simrequest.service';
import { PlansComponent } from './plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    NavbarComponent,
    FooterComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    SupportComponent,
    NewpostpaidComponent,
    NewprepaidComponent,
    // PaybillComponent,
    PostpaidplansComponent,
    // RechargeComponent,
    // PrepaidplansComponent,
    PaybillsComponent,
    SuccessfulComponent,
    DashboardComponent,
    PlansComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
     MatToolbarModule,
     MatIconModule,
     MatExpansionModule,
     MatTabsModule,
     MatCardModule,
     HttpClientModule,
    //  CommonModule

  ],
  providers: [PrepaidplansService, SimrequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
