import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Trainer } from '../classes/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private apiUrl ='http://localhost:9000/api/Trainer?page=0&size=5'

  constructor(private http:HttpClient) { }
  getTrainer():Observable<Trainer[]>
  {
    return this.http.get<Trainer[]>(this.apiUrl);
  }
}
