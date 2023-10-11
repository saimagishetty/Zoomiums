import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { KeyBuiltInFeaturesComponent } from './components/key-built-in-features/key-built-in-features.component';
import { AccessYourStoreComponent } from './components/access-your-store/access-your-store.component';
import { AboutUsHeaderComponent } from './components/about-us-header/about-us-header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CounterSectionComponent } from './components/counter-section/counter-section.component';
import { FaqComponent } from './components/faq/faq.component';
import { ImsComponent } from './components/ims/ims.component';
import { FooterToeComponent } from './components/footer-toe/footer-toe.component';
import { StreamlineComponent } from './components/streamline/streamline.component';
import { StaffingComponent } from './pages/staffing/staffing.component';
import { StaffingComponentComponent } from './components/staffing-component/staffing-component.component';
import { JobOfferedComponentComponent } from './components/job-offered-component/job-offered-component.component';
import { ContactreqComponent } from './contactreq/contactreq.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { CommonModule } from '@angular/common';
import { TestimonalsComponent } from './components/testimonals/testimonals.component';
import { Testimonals2Component } from './components/testimonals2/testimonals2.component';
import { FormsModule } from '@angular/forms';
import { CortrackerOverComponent } from './components/cortracker-over/cortracker-over.component';
import { HrmsComponent } from './pages/hrms/hrms.component';
import { CrmComponent } from './pages/crm/crm.component';
import { CorFinsComponent } from './pages/cor-fins/cor-fins.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    ClientsComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent,
    KeyBuiltInFeaturesComponent,
    AccessYourStoreComponent,
    AboutUsHeaderComponent,
    GalleryComponent,
    CounterSectionComponent,
    FaqComponent,
    ImsComponent,
    FooterToeComponent,
    StreamlineComponent,
    StaffingComponent,
    StaffingComponentComponent,
    JobOfferedComponentComponent,
    ContactreqComponent,
    DropdownComponent,
    PreloaderComponent,
    TestimonalsComponent,
    Testimonals2Component,
    CortrackerOverComponent,
    HrmsComponent,
    CrmComponent,
    CorFinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
