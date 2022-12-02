import { Component, OnInit } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular shop app';

  term = '';

  constructor(private productService: ProductService) { }

  products$?: Observable<IProduct[]>;

  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productService.getAll()
    .pipe(
      tap(() => this.loading = false)
    );
    
  }
}
