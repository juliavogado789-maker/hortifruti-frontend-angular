import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-table-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-table-two.component.html',
})
export class BasicTableTwoComponent {
  tableData = [
    {
      image: 'assets/images/frutas/banana.jpg',
      name: 'Banana Prata',
      price: 'R$ 5,20',
      stock: 90,
      date: '2025-11-05',
    },
    {
      image: 'assets/images/frutas/maca.jpg',
      name: 'Maçã Fuji',
      price: 'R$ 6,00',
      stock: 110,
      date: '2025-11-03',
    },
    {
      image: 'assets/images/frutas/melancia.jpg',
      name: 'Melancia Inteira',
      price: 'R$ 12,00',
      stock: 45,
      date: '2025-11-04',
    }