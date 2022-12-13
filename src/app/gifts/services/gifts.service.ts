import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftsResponse } from '../interface/gifts.interface';
import { Gift } from './../interface/gifts.interface';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  private _historial: string[] = [];
  private apiKey: string = 'C1x6U4RwPQLiniM463T75uUvIJ6GTCvM';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs/';
  public resultados: Gift[] = [];
  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }
  buscarGifts(query: string = '') {
    query = query.trim().toUpperCase();
    if (query.trim().length === 0) {
      return;
    }
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    /* fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=C1x6U4RwPQLiniM463T75uUvIJ6GTCvM&q=mama&limit=10'
    ).then((resp) => {
      resp.json().then((data) => {
        console.log(data);
      });
    }); */

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);

    this.http
      .get<SearchGiftsResponse>(`${this.servicioUrl}search`, { params: params })
      .subscribe((resp) => {
        console.log(
          '🚀 ~ file: gifts.service.ts:39 ~ GiftsService ~ buscarGifts ~ resp',
          resp.data
        );
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(resp.data));
      });
  }
}
