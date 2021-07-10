import { Component, OnInit } from '@angular/core';
import { LinkapiService } from 'src/app/service/linkapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public data : LinkapiService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( msg => {
      console.log(msg);
      
      
      
    })
  }





}
