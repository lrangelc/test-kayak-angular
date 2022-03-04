import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  exports: [MatGridListModule, MatPaginatorModule]
})
export class MaterialModule { }
