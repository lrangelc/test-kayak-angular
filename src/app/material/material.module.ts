import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [MatGridListModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
