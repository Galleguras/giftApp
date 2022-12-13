import { GiftsService } from 'src/app/gifts/services/gifts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent {
  get resultados() {
    return this.GiftsService.resultados;
  }
  constructor(private GiftsService: GiftsService) {}
}
