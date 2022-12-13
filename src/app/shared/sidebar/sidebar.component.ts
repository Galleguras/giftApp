import { Component } from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get historial() {
    return this.giftsService.historial;
  }
  constructor(private giftsService: GiftsService) {}
  valorH = this.giftsService.historial;
  public buscar(termino: string) {
    console.log(
      '🚀 ~ file: sidebar.component.ts:15 ~ SidebarComponent ~ buscar ~ termino',
      termino
    );
    this.giftsService.buscarGifts(termino);
  }
  // console.log("🚀 ~ file: sidebar.component.ts:11 ~ SidebarComponent ~ valorH", valorH)
}
