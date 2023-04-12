import { Component } from '@angular/core';
import { IVacancy } from 'src/app/models/vacancy';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  vacancies: IVacancy[] = [];
  loading = false;

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.vacancyService.getVacancies().subscribe((data) => {
      this.loading = false;
      this.vacancies = data;
    });
  }
}
