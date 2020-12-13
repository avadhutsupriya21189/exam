import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  url = 'http://localhost:4000/cart'

  constructor(
    private httpClient : HttpClient
  ) { }


  getCartItems(){
    //add the token in request header
    const httpOptions = {
     headers : new HttpHeaders({
      token : sessionStorage['token']
    })
  };
   return this.httpClient.get(this.url + "/user" , httpOptions)
  }
  
  addCartItem(productId,price,quantity){
    //add the token in request header
    const httpOptions = {
     headers : new HttpHeaders({
      token : sessionStorage['token']
    })
  };

  const body = {
    productId : productId,
    price : price,
    quantity : quantity
  }
   return this.httpClient.post(this.url + "/user" ,body , httpOptions)
  }


  updateCartItems(id , quantity, price){
    //add the token in request header
    const httpOptions = {
     headers : new HttpHeaders({
      token : sessionStorage['token']
    })
  };
  const body = {
    price : price,
    quantity : quantity
  }
   return this.httpClient.put(this.url + "/" + id , body, httpOptions)
  }



  deleteCartItems(id){
    //add the token in request header
    const httpOptions = {
     headers : new HttpHeaders({
      token : sessionStorage['token']
    })
  };
   return this.httpClient.delete(this.url + "/" + id , httpOptions)
  }


}
