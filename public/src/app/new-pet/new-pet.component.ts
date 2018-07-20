import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup ,Validators } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  create: FormGroup;
  errors: {};
  
  constructor(private _httpService: HttpService, private fb: FormBuilder, private _router: Router, private _parent: HomeComponent) {
    
    this.create = fb.group({
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
  }

  createPet(post){
    console.log(post);
    post.skills.push(post.skill1,post.skill2,post.skill3);
    let new_pet = this._httpService.createPets(post);
    new_pet.subscribe(data => {
      console.log(data)
      if ('errors' in data){
        console.log(data);
        this.errors = data.errors;
      }
      else {
        this._parent.ngOnInit();
        this._router.navigate(['/pets']);
      }
    });
  }

}
