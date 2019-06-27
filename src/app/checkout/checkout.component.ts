import { Component, OnInit, Input } from '@angular/core';
// import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
 
  @Input() am;
  
 
  
  

  ngOnInit() {
  }

}
