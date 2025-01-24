import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  private productsApi="http://localhost:3000/termekek/"
  private produtctsSub= new BehaviorSubject<any>(null)

  constructor(private http:HttpClient) {
    this.downloadProducts()
   }

  getProducts(){
    return this.produtctsSub;
  }

  private downloadProducts(){
    this.http.get(this.productsApi).subscribe(
      (products)=>this.produtctsSub.next(products)
    )
  }

  postProduct(product:any){
    this.http.post(this.productsApi,product).forEach(
      ()=>this.downloadProducts()
    )
  }
 putProduct(product:any){
    this.http.put(this.productsApi+product.id,product).forEach(
      ()=>this.downloadProducts()
    )
  }
 deleteProduct(product:any){
    this.http.delete(this.productsApi+product.id).forEach(
      ()=>this.downloadProducts()
    )
  }

}
