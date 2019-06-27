import { Component } from '@angular/core';
import { Item } from './models/app.interface';
import { cart1 } from './models/app.interface';
import { CatelogComponent } from './catelog/catelog.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  orders;
  orders1;

  

}
