import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ShippingComponent} from './shipping/shipping.component';
import {CartComponent} from './cart/cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [{path: '', component: ProductListComponent},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/shipping', component: ShippingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
