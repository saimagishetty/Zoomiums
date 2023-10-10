import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeadCompOneComponent } from './Components/head-comp-one/head-comp-one.component';
import { PopularCountriesComponent } from './Components/popular-countries/popular-countries.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';
import { CounterSectionsComponent } from './Components/counter-sections/counter-sections.component';
import { TestimonalsComponent } from './Components/testimonals/testimonals.component';
import { RecentNewArticlesComponent } from './Components/recent-new-articles/recent-new-articles.component';
import { CountryComponent } from './Pages/country/country.component';
import { CountryCompOneComponent } from './Components/country-comp-one/country-comp-one.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { WorkComponent } from './Pages/work/work.component';
import { HeadCompTwoComponent } from './Components/head-comp-two/head-comp-two.component';
import { CountryLineComponent } from './Components/country-line/country-line.component';
import { FaqComponent } from './Components/faq/faq.component';
import { CoachingComponent } from './Pages/coaching/coaching.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { GalleryTypeOneComponent } from './Components/gallery-type-one/gallery-type-one.component';
import { FooterToeComponent } from './Components/footer-toe/footer-toe.component';
import { PostVisaComponent } from './Pages/post-visa/post-visa.component';
import { ImmigrationVisaComponent } from './Pages/immigration-visa/immigration-visa.component';
import { NonImmigrationVisaComponent } from './Pages/non-immigration-visa/non-immigration-visa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HeadCompOneComponent,
    PopularCountriesComponent,
    WhoWeAreComponent,
    CounterSectionsComponent,
    TestimonalsComponent,
    RecentNewArticlesComponent,
    CountryComponent,
    CountryCompOneComponent,
    OurServicesComponent,
    WorkComponent,
    HeadCompTwoComponent,
    CountryLineComponent,
    FaqComponent,
    CoachingComponent,
    AboutusComponent,
    GalleryTypeOneComponent,
    FooterToeComponent,
    PostVisaComponent,
    ImmigrationVisaComponent,
    NonImmigrationVisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
