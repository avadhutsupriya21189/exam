import { CategoryService } from '../category.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  products = []
  allProducts = []
  categories = []
  

  constructor(
    private categoryService : CategoryService,
    private modalService : NgbModal,
    private cartService : CartService,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.loadProducts()
    this.loadCategories()
  }

  filterProducts(event) {
    const categoryId = event.target.value
    this.products = []
    if (categoryId == -1) {
      this.products = this.allProducts
    } else {
      this.products = this.allProducts.filter(product => {
        return product.category['id'] == categoryId
      })
    }
  }


  loadCart(){
    this.modalService.open(CartComponent ,{ size : 'lg'})
  }



  loadCategories() {
    this.categoryService
      .getCategories()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.categories = response['data']
          this.categories.push({id: -1, title: 'All Categories'})
          console.log(this.categories)
        }
      })
  }

  loadProducts() {
    this.productService
      .getProducts()
      .subscribe(response => {
        console.log(response)
        if (response['status'] == 'success') {
          this.allProducts = response['data']
          this.products = this.allProducts
        }
      })
  }


  addToCart(product){
    this.cartService
      .addCartItem(product['id'],product['price'],1)
        .subscribe(response => {
          if(response['status'] == 'success'){
            alert('your product added to Cart')
        } else {
          console.log(response['error'])
        }

      })
  }

}


