import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { TruncatePipe } from '../../shared/truncate.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProducts().find(p => p.id === productId);
  }

}



