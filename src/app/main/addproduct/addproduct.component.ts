import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {

  partners = [
    "Microsoft", "Kaufland", "Flanco", "Flanco", "Flanco", "Flanco", "Flanco", "Flanco", "Flanco", "Flanco"
  ]

  categories = [
    "Category 1", "Category 2", "Category 3", "Category 4", "Category 5"
  ]

  clasaEnergetica = [
    "Energetica 1", "Energetica 2", "Energetica 3", "Energetica 4", "Energetica 5"
  ]
}
