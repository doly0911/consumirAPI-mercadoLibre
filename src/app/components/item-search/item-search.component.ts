import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiMercadoLibreService } from 'src/app/services/api-mercado-libre.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {
  @Output() product: EventEmitter <string> = new EventEmitter();
  search:string;

  constructor(private api: ApiMercadoLibreService) {
    this.search="";
  }

  ngOnInit(): void {
  }

  getItems(){
    console.log("valor ingresado", this.search)
    this.product.emit(this.search)
  }

}
