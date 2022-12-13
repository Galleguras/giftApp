import { GiftsService } from './../services/gifts.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(private giftsService: GiftsService) {}
  buscar() {
    console.log('buscar', this.txtBuscar.nativeElement.value);
    const valor = this.txtBuscar.nativeElement.value;

    this.giftsService.buscarGifts(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
