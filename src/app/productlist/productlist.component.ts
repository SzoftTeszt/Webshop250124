import { Component } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products:any

  constructor(private pserv:ProductlistService, private cartServ:CartService){
    this.pserv.getProducts().subscribe(
      (termekek)=>this.products=termekek
    )
  }

  addProduct(product:any){
    this.cartServ.addProduct(product)
  }

}
