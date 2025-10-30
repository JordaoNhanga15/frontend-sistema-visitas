// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material base que os teus componentes usam

// componentes shared
import { AppListComponent } from './components/app-list/app-list.component';
import { AppFiltersComponent } from './components/app-filters/app-filters.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import { AppPaginationComponent } from './components/app-pagination/app-pagination.component';
import { AppExportComponent } from './components/app-export/app-export.component';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [
    AppListComponent,
    AppFiltersComponent,
    AppTableComponent,
    AppPaginationComponent,
    AppExportComponent,
    AppButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    // exporta para os outros módulos poderem usar
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    AppListComponent,
    AppFiltersComponent,
    AppTableComponent,
    AppPaginationComponent,
    AppExportComponent,
    AppButtonComponent,
  ]
})
export class SharedModule {}
