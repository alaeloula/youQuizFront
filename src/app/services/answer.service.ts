import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../classes/answer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  
  private apiUrl ='http://localhost:9000/api/Response?page=0&size=10'
  private apiUrlp ='http://localhost:9000/api/Response'
  getAnswers() {
    return this.http.get<Answer[]>(this.apiUrl)
  }
  addAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.apiUrl, answer)
  }
  deleteAnswer(answer: Answer) {
    const url :string =`${this.apiUrlp}/${answer.id}`;
    return this.http.delete<Answer>(url);
  }
  constructor(private http:HttpClient) { }
}
