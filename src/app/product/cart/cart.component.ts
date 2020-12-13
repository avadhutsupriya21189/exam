import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  items = []
  totalAmount = 0

  ngOnInit(): void {
    this.loadCartItems()
  }

  loadCartItems(){
     this.cartService
       .getCartItems()
         .subscribe( response => {
             if(response['status'] == 'success'){
                this.items = response['data']
                this.totalAmount = 0
                for (let index = 0; index < this.items.length; index++) {
                  const item = this.items[index];
                  this.totalAmount += parseFloat(item['totalAmount'])
                }
             } else {
               console.log(response['error'])
             }
         })
  }


  updateQuantity(quantity, item) {
      const newQuantity = item['quantity'] + quantity
      if(newQuantity == 0){
        this.onDelete(item)
      } else {
        this.cartService
          .updateCartItems(item['id'] , newQuantity, item['price'])
            .subscribe( response => {
                if(response['status'] == 'success'){
                  this.items = response['data']
                  this.loadCartItems()
                } else {
                  console.log(response['error'])
                }
            })
      }
  }

  onDelete(item) {
    this.cartService
    .deleteCartItems(item['id'])
      .subscribe( response => {
          if(response['status'] == 'success'){
             this.items = response['data']
             this.loadCartItems()
          } else {
            console.log(response['error'])
          }
      })
  }

}
