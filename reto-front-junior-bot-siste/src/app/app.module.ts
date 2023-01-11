import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from 'src/presentation/product/product.module';
import { ProductComponent } from 'src/presentation/product/product.component';
import { Routes } from '@angular/router';
import { HomeShopComponent } from 'src/presentation/home-shop/home-shop.component';
import { MatTableModule } from '@angular/material/table'  
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeShopModule } from 'src/presentation/home-shop/home-shop.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: 'home-shop', component: HomeShopComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductModule,
    HomeShopModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [ MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
