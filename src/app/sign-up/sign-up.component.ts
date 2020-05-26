import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { HttpClient } from '@angular/common/http';
const log = new Logger('SignUp');

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  error: string | undefined;
  signUpForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  ngOnDestroy() {}

  signUp() {
    this.isLoading = true;

    this.httpClient
      .post('/signUp', {
        username: this.signUpForm.value.username,
        password: this.signUpForm.value.password,
        type: this.signUpForm.value.role,
      })
      .pipe(
        finalize(() => {
          this.signUpForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe(
        (res) => {
          this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
  }

  private createForm() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      companyName: ['', null],
      role: ['', Validators.required],
    });
  }
}
