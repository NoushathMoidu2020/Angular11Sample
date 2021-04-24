import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CartService {
  cartItems: any = [];

  constructor(private httpClient: HttpClient) {
  }

  insert(product: any): void {
    this.cartItems.push(product);
  }

  list(): any {
    return this.cartItems;
  }

  clear(): any {
    this.cartItems = [];
    return this.cartItems;
  }

  getShippingPrices(): any {
    return this.httpClient.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
