import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-table-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-table-one.component.html',
})
export class BasicTableOneComponent {
  tableData = [
    {
      image: 'assets/images/verduras/alface.jpg',
      name: 'Alface Crespa',
      price: 'R$ 3,50',
      stock: 120,
      date: '2025-11-01',
    },
    {
      image: 'assets/images/verduras/couve.jpg',
      name: 'Couve Manteiga',
      price: 'R$ 4,00',
      stock: 80,
      date: '2025-11-02',
    },
    {
      image: 'assets/images/verduras/espinafre.jpg',
      name: 'Espinafre',
      price: 'R$ 3,20',
      stock: 45,
      date: '2025-11-03',
    },
  ];
}
