import { Component, OnInit, Input } from '@angular/core';
import { ApiMercadoLibreService } from 'src/app/services/api-mercado-libre.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item:any;
  constructor(private api: ApiMercadoLibreService) { }

  ngOnInit(): void {
  }

/**
  getItem(id_item:any){
    this.api.getItemById(id_item).subscribe{
      (item:any)=>{

      }
    }

  }
  */

}
