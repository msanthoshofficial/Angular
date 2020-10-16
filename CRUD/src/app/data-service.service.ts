import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(private http: HttpClient) {
  }
  public url = "/api/getCollection";
  public url1 = "/api/addDoc";
  getCol(){
    return this.http.get(this.url);
  }
  addDoc(querry) {
    console.log("service",querry)
    return this.http.post(this.url1,querry);
  }
}
