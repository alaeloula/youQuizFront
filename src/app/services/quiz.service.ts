import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Quiz } from '../classes/quiz';
import { QuestionRes } from '../classes/QuestionRes';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl ='http://localhost:9000/api/Test'

  constructor(private http:HttpClient) { }
  getQuiz():Observable<Quiz[]>
  {
    return this.http.get<Quiz[]>(this.apiUrl);
  }
  deleteQuiz(quiz:Quiz):Observable<Quiz>{
    const url :string =`${this.apiUrl}/${quiz.id}`;
    return this.http.delete<Quiz>(url);
  }
  addQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.apiUrl, quiz);
  }
  getQuestionsForQuiz(quizId: number): Observable<QuestionRes[]> {
    const url = `${this.apiUrl}/${quizId}/questions`; // URL dynamique avec l'identifiant du quiz
    return this.http.get<QuestionRes[]>(url);
  }
  
}
