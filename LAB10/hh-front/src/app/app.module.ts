import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/company.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { AuthInterceptor } from './AuthInterceptor';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Top10VacanciesPageComponent } from './pages/top10-vacancies-page/top10-vacancies-page.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';
import { CompVacanciesPageComponent } from './pages/comp-vacancies-page/comp-vacancies-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    VacancyComponent,
    HomePageComponent,
    Top10VacanciesPageComponent,
    CompaniesPageComponent,
    VacancyPageComponent,
    CompVacanciesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
