import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
// import { CatelogComponent } from '../catelog/catelog.component';
// import { cart1} from '../models/app.interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']

})
export class CartComponent implements OnInit {
  amount:number=0;
  @Input() arr1;
  @Input() am;
  @Output() data3=new EventEmitter;
 
  
remove(item:any,m:number)  {
  this.arr1.splice(m,1)
  this.am=this.am-item.price; 
  
  console.log(this.am);
  this.data3.emit(this.am);
  
  
  
}


  ngOnInit() {
  }

}
