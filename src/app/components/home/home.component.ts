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
  offset: any;
  query : any;
  constructor(private api: ApiMercadoLibreService) {
    this.items = [];
    this.value = "";
    this.offset = 0;
    this.query = "";
   }

  ngOnInit(): void {
    this.getItem('ipad',0)
  }

  getItem(item_name:any, offset:any){
    if(this.query != item_name){
      this.items = [];
    }
    this.query = item_name;
    this.api.getItems(item_name,offset).subscribe(
      ((items:any) =>{
        this.offset= items.paging.offset + items.paging.limit;
        this.items= this.items.concat(items.results);
      })
    );

  }

}
