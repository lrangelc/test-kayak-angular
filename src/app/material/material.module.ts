import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [MatGridListModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class MaterialModule { }
