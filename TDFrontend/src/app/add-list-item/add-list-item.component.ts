import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.css']
})
export class AddListItemComponent implements OnInit {

  listItem: any = {};

  constructor(public api : ApiService) { }

  ngOnInit(): void {
  }

  post(listItem){
    this.api.postItem(listItem);
  }

}
