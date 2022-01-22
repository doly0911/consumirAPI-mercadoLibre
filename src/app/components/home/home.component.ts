import { Component, OnInit, Input } from '@angular/core';
import { ApiMercadoLibreService } from 'src/app/services/api-mercado-libre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input () value: string;
  items: Array<any>;

  constructor(private api: ApiMercadoLibreService) {
    this.items = [];
    this.value = "";
   }

  ngOnInit(): void {
    this.getItem('ipad')
  }

  getItem(item_name:any){
    this.api.getItems(item_name).subscribe(
      ((items:any) =>{
        this.items = items.results;
      })
    );

  }

}
