import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { HttpService } from './http.service';

// import { Router, ActivatedRoute } from '@angular/router';
// [routerLink]="['/products']"

// import { FormBuilder, FormGroup, Validator } from '@angular/forms';
// private _httpService: HttpService, private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _parent: ProductsComponent

//#### EXAMPLES ON GETTING PARAMS FROM ROUTES!
// this._route.paramMap.subscribe(data => {
  //   this.id = data.get('id');
  //   this.getProduct(data.get('id'));
  // })
  // this.update = fb.group({
    //   title: '',
    //   price: '',
    //   url: '',
    //   _id: ''
    // })
    
// formGroup]="create" (ngSubmit)="newProduct(create.value)"
// formControlName="title"
// [disabled]="!create.valid"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(private _httpService: HttpService, private _elementRef: ElementRef){}
  ngAfterViewInit(){
    this._elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f0f0f1';
 }
  ngOnInit(){}


}
