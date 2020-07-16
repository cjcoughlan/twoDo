import { Injectable } from '@angular/core';

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

  constructor() { }

  get(){
    return new Promise(resolve => resolve(listItems));
  }

}
