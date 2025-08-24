import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

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
      description: 'Smart Phone - Latest version',
      img: 'assets/images/phone.jpg'
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
  
  //Cart state as a BehaviorSubject
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  getProducts(): Product[] {
    return this.products;
  }

  addToCart(product: Product) {
    const currentCart = this.cartSubject.value;
    this.cartSubject.next([...currentCart, product]);
  }

  removeFromCart(productId: Number) {
    const updatedCart = this.cartSubject.value.filter(p => p.id !== productId);
    this.cartSubject.next(updatedCart)
  }
}
