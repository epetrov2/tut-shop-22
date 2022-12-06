import { Component, OnInit } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ModalService } from './services/modal.service';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular shop app';

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
