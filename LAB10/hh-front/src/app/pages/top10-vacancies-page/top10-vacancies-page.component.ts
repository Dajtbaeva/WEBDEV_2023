import { Component, OnInit } from '@angular/core';
import { IVacancy } from 'src/app/models/vacancy';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-top10-vacancies-page',
  templateUrl: './top10-vacancies-page.component.html',
  styleUrls: ['./top10-vacancies-page.component.css'],
})
export class Top10VacanciesPageComponent implements OnInit {
  vacancies: IVacancy[] = [];
  loading = false;

  constructor(private vacancyService: VacancyService) {}

  ngOnInit() {
    this.loading = true;
    this.vacancyService.getTop10Vacancies().subscribe((data) => {
      this.loading = false;
      this.vacancies = data;
    });
  }
}
