import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '@app/shared/shared.module';
@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule {}
