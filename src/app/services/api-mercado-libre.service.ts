import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMercadoLibreService {


  constructor(private http:HttpClient) { }

  getItems(item_name:any){
   return this.http.get(`https://api.mercadolibre.com/sites/MCO/search?q=${item_name}&limit=20`)
  }

  getItemById(id_item:any){
    return this.http.get(`https://api.mercadolibre.com/items/${id_item}`)
  }
}
