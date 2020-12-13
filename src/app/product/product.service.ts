import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:4000/product'

  constructor(
    private httpClient : HttpClient
  ) { }


  getProducts(){
    //add the token in request header
    const httpOptions = {
     headers : new HttpHeaders({
      token : sessionStorage['token']
    })
  };
   return this.httpClient.get(this.url , httpOptions)
  }

  getProductDetails(id){
    //add the token in request header
    const httpOptions = {
     headers : new HttpHeaders({
      token : sessionStorage['token']
    })
  };
   return this.httpClient.get(this.url + "/details/" + id , httpOptions)
  }
}
