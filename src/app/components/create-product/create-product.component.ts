import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private productService: ProductService,
    private modalService: ModalService) {}

  ngOnInit(): void {}

  get title() {
    return this.form.controls.title!;
  }

  submit() {
    this.productService.create({
      title: this.form.value.title!,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).subscribe(() => this.modalService.close());
  }
}
