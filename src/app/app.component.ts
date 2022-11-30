import { Component } from '@angular/core';
import { products as data } from './data/product';
import { IProduct } from './models/product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular shop app';

  products: IProduct[] = data;
}
