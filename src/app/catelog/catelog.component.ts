import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Item } from '../models/app.interface';
import { cart1 } from '../models/app.interface';

@Component({
  selector: 'app-catelog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.scss']
})
export class CatelogComponent implements OnInit {
  amount:number=0;
  arr1:Item[]=[
    {
    item:"shoes",
    price:100 
  },
  {
    item:"earings",
    price:150
  },
  {
    item:"saree",
    price:900
  },
  {
    item:"jeans",
    price:600
  }
];
arr2:cart1[]=[];
 @Output() public data = new  EventEmitter ;
 @Output() public data1 = new  EventEmitter ;
 

  //constructor() { }

  Add(item:any)
{

  this.arr2.push(item);
  this.amount=this.amount+item.price;
  this.data.emit(this.arr2);
  this.data1.emit(this.amount);


 
  
  
}

  ngOnInit() {
  }

}
