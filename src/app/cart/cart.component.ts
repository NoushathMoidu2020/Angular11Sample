import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = this.cartService.list();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    this.cartItems = this.cartService.clear();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
