import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent, AppDropdownComponent, AppTableComponent, AppPaginationComponent, AppExportComponent, AppFiltersComponent, AppListComponent } from './components/index';

@NgModule({
  declarations: [AppButtonComponent, AppDropdownComponent, AppTableComponent, AppPaginationComponent, AppExportComponent, AppFiltersComponent, AppListComponent],
  imports: [
    CommonModule
  ],
  exports: [AppButtonComponent, AppDropdownComponent, AppTableComponent, AppPaginationComponent, AppExportComponent, AppFiltersComponent, AppListComponent]
})
export class SharedModule { }
