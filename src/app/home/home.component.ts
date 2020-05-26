import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { CredentialsService } from '@app/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { untilDestroyed } from '@app/@core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  error: string | undefined;
  results: Array<string> = [];

  constructor(
    private quoteService: QuoteService,
    private credentialsService: CredentialsService,
    private httpClient: HttpClient
  ) {}

  seach() {
    this.isLoading = true;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.credentialsService.credentials.token}`),
    };

    this.httpClient
      .get('/buyer/item/findAll', header)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (res) => {
          this.results = [];
          for (let key in res) {
            this.results.push(res[key]);
          }
        },
        (error) => {
          this.error = error;
        }
      );
  }

  ngOnInit() {
    this.seach();
  }
}
