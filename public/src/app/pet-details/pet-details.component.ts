import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  id: any;
  pet: any;
  bool: Boolean;

  constructor(private _httpService: HttpService , private _route: ActivatedRoute, private _router: Router) {
    this._route.paramMap.subscribe(data => {
      this.id = data.get('id');
    });
  }

  ngOnInit() {
    this.pet = {
      name: '',
      type: '',
      description: '',
      skills: ['','',''],
      likes: Number
    };
    this.getOnePet();
  }

  getOnePet(){
    let one_pet = this._httpService.onePet(this.id);
    one_pet.subscribe(data => {
      this.pet = data;
      console.log(this.pet)
      return this.pet;
    });
  }

  addLike(id){
    this.bool = false;
    let like = this._httpService.addLikes(id);
    like.subscribe(data => {
      this.ngOnInit();
      console.log(data)
    });
    return this.bool;
  };

  adoptPet(id){
    let adoption = this._httpService.adoptPet(id);
    adoption.subscribe(data => {
      this._router.navigate(['/pets']);
      console.log(data)
    });
  };

}
