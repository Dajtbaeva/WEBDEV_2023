import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacancy } from 'src/app/models/vacancy';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.css'],
})
export class VacancyPageComponent {
  vacancy_id!: number;
  vacancy!: IVacancy;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.vacancy_id = this.route.snapshot.params['id'];
    this.vacancyService.getVacancy(this.vacancy_id).subscribe((vacancy) => {
      this.loading = false;
      this.vacancy = vacancy;
    });
  }
}
