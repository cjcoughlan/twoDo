import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
  providers: [ApiService]
})
export class ListItemsComponent implements OnInit {

  public listitems;
  public listitem;
  
  constructor(public api: ApiService) { }

  getItems(){
    return this.api.getAllItems().subscribe(items => {
      this.listitems = items;
    })
  }

  putItem(listitem){
    this.api.putItem(listitem);
  }  

  ngOnInit(){
    this.getItems();
  }

}
