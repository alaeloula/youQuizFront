import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { QuestionRes } from '../classes/QuestionRes';
import { QuestionReq } from '../classes/questionReq';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://localhost:9000/Question?page=0&size=5';
  private apiUrlp = 'http://localhost:9000/Question';

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<QuestionRes[]> {
    return this.http.get<QuestionRes[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  deleteQuestion(question: QuestionReq): Observable<QuestionRes> {
    const url: string = `${this.apiUrlp}/${question.id}`;
    return this.http.delete<QuestionReq>(url).pipe(
      catchError(this.handleError)
    );
  }

  addQuestion(question: QuestionReq): Observable<QuestionReq> {
    return this.http.post<QuestionReq>(this.apiUrlp, question).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
