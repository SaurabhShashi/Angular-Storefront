import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PaginationParamas, Products } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }
  getProducts = (url: string, params:PaginationParamas): Observable<Products> =>{
    return this.apiService.get(url, {
      params,
      responseType:'json'
    })
  }
}
