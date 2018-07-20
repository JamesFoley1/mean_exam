import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getPets(){
    return this._http.get('/api/pets');
  };

  onePet(id){
    return this._http.get('/api/pets/'+id);
  };

  createPets(data){
    return this._http.post('/api/pets/new', data);
  };

  updatePets(id, data){
    return this._http.patch('/api/pets/update/'+id, data);
  };

  addLikes(id){
    return this._http.get('/api/pets/update/likes/'+id);
  };

  adoptPet(id){
    return this._http.delete('/api/pets/adopt/'+id);
  };


}
