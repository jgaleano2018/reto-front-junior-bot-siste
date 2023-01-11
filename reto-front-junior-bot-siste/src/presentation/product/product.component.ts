
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/data/interface/product.interface';
import { ProductService } from 'src/domain/service/product.service';
import { ActionConstants } from 'src/utilities/constants/action.constants';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form: any;
  submitted = false;
  idProduct: number = 0;
  dominio: any;
  countryFilter: any;
  productArray: Product[];
  productSingle: Product;
  module: ActionConstants | undefined;

  constructor(private formBuilder: FormBuilder,
              private _productService: ProductService,
              public _activatedRoute: ActivatedRoute
    ) {
    this.setForm();
    this.getActionProductForm();
    this.productArray = [];
    this.productSingle = {} as Product;
  }

  setForm() {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ]
        ],
        inInventory: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ]
        ],
        min: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ]
        ],
        max: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ]
        ],
        enabled: ['', Validators.required]
      }
    );
  }

  getActionProductForm() {
    if (this._activatedRoute.snapshot.queryParamMap.get('action') !== ActionConstants.action.createProduct)
    {
      this.productArray = this._activatedRoute.snapshot.queryParamMap.get('productSend') as unknown as Product[];
    }
  }

  ngOnInit(): void {
    this.setForm();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  loadInit(): void {
    if (this.module == "UpdateProduct")
    {
      this._productService.getProductsId(this.idProduct).subscribe({
        next: (res) => { 
          if (res !== null) { this.productArray = res as Product[]; }
        },
        error: (e) => alert('Se presentó un error al consultar los datos del producto.'),
        complete: () => console.info('complete') 
        });
    }
  }

  onSubmit() {
    //this.module = ActionConstants.action.createProduct;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.productSingle = {} as Product;
    this.productSingle.name = this.form.get('name').value;
    this.productSingle.inInventory = this.form.get('inInventory').value;
    this.productSingle.min = this.form.get('min').value;
    this.productSingle.max = this.form.get('max').value;
    this.productSingle.enabled = this.form.get('enabled').value;

    if (this.module === ActionConstants.action.createProduct)
    {
      this._productService.createProduct(this.productSingle).subscribe({
        next: (res) => alert('Registro creado exitosamente'),
        error: (e) => alert('Se presentó un error al crear el Producto'),
        complete: () => console.info('complete') 
        });
    }
    else {
      if (this.module === ActionConstants.action.updateProduct)
      {
        this._productService.updateProduct(this.productSingle).subscribe({
          next: (res) => alert('Registro actualizado exitosamente'),
          error: (e) => alert('Se presentó un error al actualizar el Producto'),
          complete: () => console.info('complete') 
          });
      } 
      else {
        if (this.module === ActionConstants.action.deleteProduct)
        {
          this._productService.deleteProduct(this.productSingle.id).subscribe({
            next: (res) => alert('Registro eliminado exitosamente'),
            error: (e) => alert('Se presentó un error al eliminar el Producto'),
            complete: () => console.info('complete') 
            });
        }
      }
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
