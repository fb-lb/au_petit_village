import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  figurines: any[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.figurines = this.productsService.productsDatabase;
  }

  // Used for the tackBy for each section generated by the ngFor (cf input element (= the search bar) in home.componenet.html)
  figurineName(index: number, figurine: any): string {
    return figurine.name;
  }

  // Get search bar value to use it in filter-by-name pipe
  inputText = '';
  onInputChange(event: Event) {
    let inputElement = event.target as HTMLInputElement;
    this.inputText = inputElement.value.toLowerCase();
  }

  // Change priceSorting value (with button which class is "products__sort-button" in home.componenet.html) which is used as an argument to apply sort-by-price pipe (cf ngFor in home.componenet.html)
  priceSorting = '';
  orderPrice(sortType: string) {
    this.priceSorting = sortType;
  }
}
