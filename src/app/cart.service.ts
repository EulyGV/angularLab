import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

/* agrega un producto a una matriz de items*/
  addToCart(product) { 
    this.items.push(product);
  }

/* recopila los artículos que los usuarios agregan al carrito y devuelve cada artículo con su cantidad asociada.*/
  getItems() { 
    return this.items;
  }

/*devuelve una matriz vacía de elementos.*/
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() {}

}