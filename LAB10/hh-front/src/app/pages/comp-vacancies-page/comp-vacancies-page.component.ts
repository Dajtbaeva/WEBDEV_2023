import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacancy } from 'src/app/models/vacancy';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-comp-vacancies-page',
  templateUrl: './comp-vacancies-page.component.html',
  styleUrls: ['./comp-vacancies-page.component.css'],
})
export class CompVacanciesPageComponent {
  vacancies: IVacancy[] = [];
  company_id!: number;
  loading = false;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.company_id = this.route.snapshot.params['id'];
    this.vacancyService.getCompVacancies(this.company_id).subscribe((data) => {
      this.loading = false;
      this.vacancies = data;
    });
  }
}
