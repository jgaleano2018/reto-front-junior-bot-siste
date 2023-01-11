import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeShopComponent } from './home-shop.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Modulo que registra los submodulos que se importan desde el component ProductComponent.
 */
@NgModule({
  declarations: [ HomeShopComponent ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule, MatButtonModule
  ],
  exports: [HomeShopComponent]
})
export class HomeShopModule {
}