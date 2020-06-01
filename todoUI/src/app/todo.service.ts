import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  getList() {
    return this.http.get(this.baseUrl + '/api');
   }

  post(data) {
    return this.http.post(this.baseUrl + '/api', data);
  }

  update(data, id) {
    return this.http.put(this.baseUrl + '/api/' + id , data);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + '/api/' + id, id);
  }
}
