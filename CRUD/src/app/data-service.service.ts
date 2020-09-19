import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(private http: HttpClient) {
  }
  public url = "http://localhost:8000/api/getCollection"
  getCol(){
    return this.http.get(this.url);
  }
}
