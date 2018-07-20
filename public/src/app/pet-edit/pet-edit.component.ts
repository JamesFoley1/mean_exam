import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  update: FormGroup
  errors: Object;
  id: any;
  pet: {};
  constructor(private _httpService: HttpService, private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router ) {
      
    this._route.paramMap.subscribe(data => {
        this.id = data.get('id');
    });

    this.update = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      skills: [[]],
      skill1: ['', [Validators.maxLength(30)]],
      skill2: ['', [Validators.maxLength(30)]],
      skill3: ['', [Validators.maxLength(30)]],
    })

  }

  ngOnInit() {
    this.pet = {
      name: '',
      type: '',
      description: '',
      skills: [],
      skill1: '',
      skill2: '',
      skill3: '',
    }
    this.getPet();
  }

  getPet(){
    let pet = this._httpService.onePet(this.id);
    pet.subscribe(data => {
      this.pet = data
      return this.pet;
    });
  }

  updatePet(post){
    post.skills.push(post.skill1,post.skill2,post.skill3);
    console.log(post);
    let pet = this._httpService.updatePets(this.id, post);
    pet.subscribe(data => {
      console.log(data)
      if ('errors' in data){
        console.log(data);
        this.errors = data.errors;
      }
      else {
        this._router.navigate(['/pets/', this.id]);
      }
    })
  }

}
