import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  term = '';

  constructor(
    public productService: ProductService,
    public modalService: ModalService
    ) { }

  

  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(
      () => this.loading = false)
    
    
  }
}
