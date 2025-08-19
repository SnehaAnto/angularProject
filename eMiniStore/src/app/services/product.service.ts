import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor() { }
  private products: Product[] =[
    {
      id: 1,
      name: 'Phone',
      price: 299,
      description: 'Smart Phone - Latest version'
    },
    {
      id: 2,
      name: 'Shirt',
      price: 40,
      description: 'Polo Shirt'
    },
    {
      id: 3,
      name: 'Duck Tape',
      price: 10,
      description: 'Back to School Sale'
    }
  ];
  
  getProducts(): Product[] {
    return this.products;
  }
}
