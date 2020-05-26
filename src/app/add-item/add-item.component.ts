import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialsService } from '@app/auth';
import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  addItemForm!: FormGroup;
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private credentialsService: CredentialsService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.createForm();
  }
  save() {
    this.isLoading = true;

    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.credentialsService.credentials.token}`),
    };

    this.httpClient
      .post(
        '/seller/item/save',
        {
          price: this.addItemForm.value.price,
          stock: this.addItemForm.value.stock,
          name: this.addItemForm.value.itemName,
          categoryId: 1,
          userId: 2,
          description: 'test API',
        },
        header
      )
      .pipe(
        finalize(() => {
          this.addItemForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (res) => {
          this.router.navigate([this.route.snapshot.queryParams.redirect || '/home'], { replaceUrl: true });
        },
        (error) => {
          this.error = error;
        }
      );
  }

  ngOnInit(): void {}

  private createForm() {
    this.addItemForm = this.formBuilder.group({
      price: ['', Validators.required],
      stock: ['', Validators.required],
      itemName: ['', Validators.required],
    });
  }
}
