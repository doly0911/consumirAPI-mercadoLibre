import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiMercadoLibreService } from 'src/app/services/api-mercado-libre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: any;
  id: string|null;
  constructor(private api: ApiMercadoLibreService,
              private activateRoute: ActivatedRoute)
  {
    this.id = "";
  }

  sub:any;
  ngOnInit(): void {
    this.sub = this.activateRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.getItem(this.id);
    })
  }

  getItem(id_item:any){
    this.api.getItemById(id_item).subscribe(
      ((item:any) =>{
        this.item = item;
      })
    );

  }



  ngOnDestroy(){
    this.sub.unsuscribe();
  }





}
