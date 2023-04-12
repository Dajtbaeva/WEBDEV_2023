import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  private URL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  getVacancy(vacancy_id: number): Observable<IVacancy> {
    return this.http.get<IVacancy>(`${this.URL}/vacancies/${vacancy_id}/`);
  }

  getVacancies(): Observable<IVacancy[]> {
    return this.http.get<IVacancy[]>(`${this.URL}/vacancies/`);
  }

  getCompVacancies(company_id: number): Observable<IVacancy[]> {
    return this.http.get<IVacancy[]>(
      `${this.URL}/companies/${company_id}/vacancies/`
    );
  }

  getTop10Vacancies(): Observable<IVacancy[]> {
    return this.http.get<IVacancy[]>(`${this.URL}/vacancies/top_ten/`);
  }
}
