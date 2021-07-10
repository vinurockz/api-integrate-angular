import { Component } from '@angular/core';
import { LinkapiService } from './service/linkapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

details: any;

  constructor(public data : LinkapiService){

  }
  ngOnInit(){
    this.data.getUsers().subscribe( msg => {
      console.log(msg);
      this.details =msg;
      
      
      
    })
  }

}
