import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css'],
})
export class CompaniesPageComponent implements OnInit {
  companies: ICompany[] = [];
  loading = false;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.companyService.getCompanies().subscribe((data) => {
      this.loading = false;
      this.companies = data;
    });
  }
}
