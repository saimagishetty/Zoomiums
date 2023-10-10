import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CorFinsComponent } from './pages/cor-fins/cor-fins.component';
import { CrmComponent } from './pages/crm/crm.component';
import { HomeComponent } from './pages/home/home.component';
import { HrmsComponent } from './pages/hrms/hrms.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { StaffingComponent } from './pages/staffing/staffing.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contact', component:ContactsComponent},
  {path:'products', component:ProductsComponent},
  {path:'clients', component:ClientsComponent},
  {path:'products/ims', component:ProductsComponent},
  {path:'products/hrms', component:HrmsComponent},
  {path:'products/crm', component:CrmComponent},
  {path:'products/cor-fins', component:CorFinsComponent},
  {path:'services', component:ServicesComponent},
  {path:'staffing', component:StaffingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
