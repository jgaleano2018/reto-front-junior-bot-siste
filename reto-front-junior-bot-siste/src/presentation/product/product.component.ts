
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/data/interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  id: number = 0;
  dominio: any;
  countryFilter: any;
  productArray: Product[];
  module: string;

  constructor(private formBuilder: FormBuilder) {
    this.setForm();
    this.productArray = [];
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
       
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      }
    );
  }

  ngOnInit(): void {
    this.setForm();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.module == "CreateProduct")
    {
      
    }
    /*this.productService.getProduct().subscribe(data => {
      this.productArray = data as Product[]
    });


    let employeeEnd: EmployeeClass = new EmployeeClass(this.id, this.form.get('identificationCard').value.value,
    this.form.get('firstName').value,this.form.get('lastName').value.value, 
    this.form.get('otherName').value.value, this.form.get('email').value.value, this.dominio);

    this._employeeService.saveEmployee(employeeEnd).subscribe(
      res => {
        alert('Registro creado exitosamente');
      },
      () => {
        alert('Se presentó un error al crear el Empleado');
      }
    );*/
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
