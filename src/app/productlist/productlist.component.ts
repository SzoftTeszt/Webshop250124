import { Component } from '@angular/core';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products:any

  constructor(private pserv:ProductlistService){
    this.pserv.getProducts().subscribe(
      (termekek)=>this.products=termekek
    )
  }
}
