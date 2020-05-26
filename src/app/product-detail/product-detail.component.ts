import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { CredentialsService } from '@app/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { untilDestroyed } from '@app/@core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  result: Object | undefined;
  error: string | undefined;
  constructor(
    private routerinfo: ActivatedRoute,
    private credentialsService: CredentialsService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.detail();
  }

  detail() {
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.credentialsService.credentials.token}`),
    };

    this.httpClient
      .get('/buyer/item/detail/' + this.routerinfo.snapshot.params.id, header)
      .pipe(finalize(() => {}))
      .subscribe(
        (res) => {
          this.result = res;
        },
        (error) => {
          this.error = error;
        }
      );
  }
}
