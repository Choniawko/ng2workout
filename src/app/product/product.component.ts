import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  categories: string[]

  constructor() {
    this.categories = ['spożywcze', 'AGD', 'RTV'];
  }

  ngOnInit() {
    this.product = new Product(1, null, 'spozywcze', 'dobra smaczna');
    console.log(this.product, 'produkt on init');
  }
  edit(product) {
    console.log(product);
  }
  onSubmit() {
    console.log('Submited');
  }
}
