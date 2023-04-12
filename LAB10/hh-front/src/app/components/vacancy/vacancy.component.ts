import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IVacancy } from 'src/app/models/vacancy';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css'],
})
export class VacancyComponent {
  @Input() vacancy: IVacancy | undefined;

  constructor(private router: Router) {}
  
  viewDetails(vacancy: IVacancy) {
    this.router.navigate(['/vacancy', vacancy.id]);
  }
}
