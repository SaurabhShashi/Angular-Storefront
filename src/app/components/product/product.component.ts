import { Component, Input } from '@angular/core';
import { Product } from '../../../types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
}
