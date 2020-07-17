import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const listItems = [
  { text: 'Retire at 55', status: 'Not Started'},
  { text: 'Inherit Money', status: 'Not Started'},
  { text: 'Find a job', status: 'In Progress'},
  { text: 'Breathe', status: 'Not Started'}
]

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  get(){
    return new Promise(resolve => resolve(listItems));
  }
  getAllItems(){
    return this.http.get('http://localhost:63013/api/ListItems');  
  }
  postItem(listItem)
  {
    this.http.post('http://localhost:63013/api/ListItems', listItem).subscribe(response => 
      {
        console.log(response);
      })
  }
  putItem(listItem)
  {
    this.http.put(`http://localhost:63013/api/ListItems/${listItem.id}`, listItem).subscribe(response => 
      {
        console.log(response);
      })
  }

}
