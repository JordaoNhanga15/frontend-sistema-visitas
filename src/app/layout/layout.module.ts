// src/app/layout/layout.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from '@app/pages/pages.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, SharedModule, LayoutRoutingModule, PagesModule],
})
export class LayoutModule { }
