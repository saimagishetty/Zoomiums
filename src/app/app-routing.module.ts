import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { CountryComponent } from './Pages/country/country.component';
import { WorkComponent } from './Pages/work/work.component';
import { CoachingComponent } from './Pages/coaching/coaching.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PostVisaComponent } from './Pages/post-visa/post-visa.component';
import { ImmigrationVisaComponent } from './Pages/immigration-visa/immigration-visa.component';
import { NonImmigrationVisaComponent } from './Pages/non-immigration-visa/non-immigration-visa.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'immigrationvisa', component:ImmigrationVisaComponent},
  {path: 'nonimmigrationvisa', component:NonImmigrationVisaComponent},
  {path: 'country', component:CountryComponent},
  {path: 'work', component:WorkComponent },
  {path: 'coaching', component:CoachingComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'postvisa', component:PostVisaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
