import { Component, signal, computed } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product} from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { HighlightDirective } from '../../shared/highlight.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HighlightDirective],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  products: Product[] = [];
  filterText = '';
  cart: Product[] = [];
  cartTotal$: any;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.productService.cart$.subscribe(cart => {
      this.cart = cart;
      console.log('Cart updated:', this.cart);
    });
    
    // Cart Total using maps, filters and state sharing
    this.cartTotal$ = this.productService.cart$.pipe(
      map(cart => cart.reduce((sum, item) => sum + item.price, 0))
    );
  }

  filteredProducts(): Product[] {
    return this.products.filter(p => p.name.toLowerCase().includes(this.filterText.toLowerCase()));
  }

  remove(productId: Number) {
    this.productService.removeFromCart(productId);
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

}
  //using Signals
  // products = signal<Product[]>([]);
  // filterText = signal('');

  // filteredProducts = computed(() => {
  //   const filter = this.filterText().toLowerCase();
  //   return this.products().filter(p => p.name.toLowerCase().includes(filter));
  // })

  // constructor(private productService: ProductService) {
  //   this.products.set(this.productService.getProducts());
  // }


