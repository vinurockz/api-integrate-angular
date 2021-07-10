
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LinkapiService {

  constructor(public http:HttpClient) { 

  }

getUsers(){
  let url="https://jsonplaceholder.typicode.com/todos";
  return this.http.get(url);
}


}
