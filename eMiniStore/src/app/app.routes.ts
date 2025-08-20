import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found.component';


export const routes: Routes = [

    //Lazy Loading Product page and its child routes
    {
        path: 'products',
        loadComponent: () => import('./products/product-layout.component').then(m => m.ProductLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./products/product-list/product-list.component').then(m => m.ProductListComponent)
            },

            {
                path: ':id',
                loadComponent: () => import('./products/product-details/product-details.component').then(m => m.ProductDetailsComponent)
            }
        ]
    },

    //Lazy Loading Cart Page
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart-page.component').then(m => m.CartPageComponent),
    },

    //Default Route
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },

    //Not Found Page - not lazy loaded because any invalid routes shoud be redirected to the products page- this logic is in NotFoundComponent
    {
        path:'**', component: NotFoundComponent
    }


    // { path: '', component: ProductListComponent },

    // //Product Details Page
    // { path: 'products/:id', component: ProductDetailsComponent },

    // //Cart Page
    // { path: 'cart', component: CartPageComponent }
];

