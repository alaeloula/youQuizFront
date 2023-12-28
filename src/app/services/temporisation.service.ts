import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Temporisation } from '../classes/temporisation';
import {Observable} from "rxjs";
import { Quiz } from '../classes/quiz';
import { TemporisationDtoRes } from '../classes/temporisationDtoRes';

@Injectable({
  providedIn: 'root'
})
export class TemporisationService {

  
  private apiUrl ='http://localhost:9000/api/Temporisation'

  constructor(private http:HttpClient) { }
  getTemporisations():Observable<TemporisationDtoRes[]>
  {
    return this.http.get<TemporisationDtoRes[]>(this.apiUrl);
  }
  getTemporisationsByQuiz(quizId:number):Observable<TemporisationDtoRes[]>
  {
    return this.http.get<TemporisationDtoRes[]>(this.apiUrl+'/byTest/'+quizId);
  }
  deleteTemporisation(temporisation:Temporisation):Observable<Temporisation>{
    const url :string =`${this.apiUrl}/${temporisation.id}`;
    return this.http.delete<Temporisation>(url);
  }
  addTemporisation(temporisation: Temporisation): Observable<Temporisation> {
    return this.http.post<Temporisation>(this.apiUrl, temporisation);
  }
  
}
