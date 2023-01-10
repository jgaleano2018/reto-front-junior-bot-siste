import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/data/interface/product.interface';
import { ProductService } from 'src/domain/service/product.service';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { MatTable } from '@angular/material/table';
import { ActionConstants } from 'src/utilities/constants/action.constants';
import { ShoppingCarService } from 'src/domain/service/shopping-car.service';
import { Customer } from 'src/data/interface/customer.interface';
import { Buy } from 'src/data/interface/buy.interface';
//import { MatDialog } from '@angular/material/dialog';
//import { DialogBoxComponent } from './dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];

@Component({
  selector: 'app-home-shop',
  templateUrl: './home-shop.component.html',
  styleUrls: ['./home-shop.component.css']
})
export class HomeShopComponent  {

  productArray: Product[];
  displayedColumns: string[] = ['id', 'name', 'inInventory', 'min', 'max'];
  dataSource: Product[];
  customer: Customer;

  constructor(private formBuilder: FormBuilder,
    private _productService: ProductService,
    private _buyService: ShoppingCarService,
    private _router: Router
  ) {
    this.productArray = [];
    this.dataSource = [];
    this.customer = {} as Customer;
  }

  ngOnInit(): void {
    this.loadInit();
  }

  loadInit(): void {
    this._productService.getProducts().subscribe({
      next: (res) => { 
        if (res !== null) { 
          this.productArray = res as Product[]; 
          this.dataSource = res as Product[];
        }
      },
      error: (e) => alert('Se presentó un error al consultar los productos.'),
      complete: () => console.info('complete') 
      });
  }

  setCreateProduct(): void {
    //Redirect to product component
    this._router.navigate(['/product'], {queryParams: {'action':ActionConstants.action.createProduct}});
  }

  setEditProduct(productSingle: Product): void {
    //Redirect to product component
    this._router.navigate(['/product'], {queryParams: {'productSend':productSingle,'action':ActionConstants.action.updateProduct}});
  }

  setDeleteProduct(productSingle: Product): void {
    //Redirect to product component
    this._router.navigate(['/product'], {queryParams: {'productSend':productSingle,'action':ActionConstants.action.deleteProduct}});
  }

  setBuyProduct(productSingle: Product): void {
    this.customer.identificationCard = '100000001';
    this.customer.name = 'Prueba';
    const query = {
      'id': 0,
      'name': 'Compra',
      'idType': 1,
      'identificationCard': this.customer.identificationCard,
      'clientName': this.customer.name,
      'quantity': 0,
      'product': this.productArray
    } as Buy;
    this._buyService.CreateBuyAsync(query);
  }

}
