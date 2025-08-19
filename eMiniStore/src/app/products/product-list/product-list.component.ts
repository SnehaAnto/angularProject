import { Component, signal, computed } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product} from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  products: Product[] = [];
  filterText = '';

  constructor(private productService: ProductService) {
    this.products =this.productService.getProducts();
  }

  filteredProducts(): Product[] {
    return this.products.filter(p => p.name.toLowerCase().includes(this.filterText.toLowerCase()));
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

}


