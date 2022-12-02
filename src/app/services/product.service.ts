import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { IProduct } from '../models/product';
import { catchError, delay, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message);
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products',
    { params: new HttpParams({
      fromObject: { limit: 7}
    })}).pipe(catchError(this.errorHandler));
  }
}
