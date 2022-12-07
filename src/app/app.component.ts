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
export class AppComponent {
  title = 'Angular shop app';

  
}
