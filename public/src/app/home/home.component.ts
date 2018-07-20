import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  all_pets: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getallPets();
  }
  
  getallPets(){
    let pets = this._httpService.getPets();
    pets.subscribe(data => {
      console.log(data);
      this.all_pets = data;
      return this.all_pets;
    })
  }

}
