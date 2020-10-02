import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
  }

  getDragonById(id) {
    return this.http.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id);
  }

  postDragon(dragon) {
    return this.http.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', dragon);
  }

  putDragon(dragon) {
    return this.http.put('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + dragon.id, dragon);
  }

  deleteDragonById(id) {
    return this.http.delete('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id);
  }

}
