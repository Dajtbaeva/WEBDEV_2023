import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompVacanciesPageComponent } from './pages/comp-vacancies-page/comp-vacancies-page.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Top10VacanciesPageComponent } from './pages/top10-vacancies-page/top10-vacancies-page.component';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'vacancy/:id', component: VacancyPageComponent },
  { path: 'companies', component: CompaniesPageComponent },
  { path: 'companies/:id/vacancies', component: CompVacanciesPageComponent },
  { path: 'top10_vacancies', component: Top10VacanciesPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
