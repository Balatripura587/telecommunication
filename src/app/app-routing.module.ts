import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from "./component/register/register.component";
import { LoaderComponent } from "./loader/loader.component";
import { PlansComponent } from './plans/plans.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaybillComponent } from './paybill/paybill.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { NewprepaidComponent } from './newprepaid/newprepaid.component';
import { NewpostpaidComponent } from './newpostpaid/newpostpaid.component';
import { SupportComponent } from './support/support.component';
import { PaybillsComponent } from './Landline/paybills/paybills.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuccessfulComponent } from "./successful/successful.component";

const routes: Routes = [
{ 'path':'', 'redirectTo':'/home', 'pathMatch':'full' },
 { path: 'login', component: LoginComponent , pathMatch: 'full' },
 { path: 'register', component: RegisterComponent , pathMatch: 'full' },
 { path: 'home', component:LoaderComponent , pathMatch:'full' },
 {path:'prepaid/plans',component:PlansComponent },
  {path:'prepaid/recharge', component:RechargeComponent,pathMatch:'full' },
  {path:'postpaid/plans',component: PostpaidplansComponent },
  {path:'postpaidpaybill', component: PaybillComponent},
  {path:'newconnection/newprepaid', component: NewprepaidComponent},
  {path: 'newconnection/newpostpaid', component: NewpostpaidComponent},
  { path:'support', component:SupportComponent },
 { path:'dashboard', component:UserDashboardComponent, pathMatch:'full' },
  { path: 'paybills', component: PaybillsComponent , pathMatch: 'full' },
  { path:'admin-dashboard', component:DashboardComponent, pathMatch:'full' },
  { path:'recharge-sucessful', component:SuccessfulComponent, pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
