import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';

/**
 * Modulo que registra los submodulos que se importan desde el component HomeComponent.
 */
@NgModule({
  declarations: [ ProductComponent ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [ProductComponent]
})
export class ProductModule {
}
