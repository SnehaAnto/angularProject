import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CartPageComponent } from './cart/cart-page.component';

export const routes: Routes = [
    // Home Page
    { path: '', component: ProductListComponent },

    //Product Details Page
    { path: 'products/:id', component: ProductDetailsComponent },

    //Cart Page
    { path: 'cart', component: CartPageComponent }
];

