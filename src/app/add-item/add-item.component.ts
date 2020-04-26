import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

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
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.createForm();
  }
  save() {
    this.isLoading = true;
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
