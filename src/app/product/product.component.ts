import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  figurine: any;
  figurineId: any;
  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.figurineId = this.activatedRoute.snapshot.paramMap.get('id');
    this.figurine = this.service.productsDatabase.find(x => x.id == this.figurineId);
  }
}
