import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Assignment } from '../classes/Assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private apiUrl = 'http://localhost:9000/api/Assignment'

  constructor(private http: HttpClient) { }
  getAssignment(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrl);
  }
  // deleteTask(level: Level): Observable<Level> {
  //   const url: string = `${this.apiUrl}/${level.id}`;
  //   return this.http.delete<Level>(url);
  // }
  // addLevel(level: Level): Observable<Level> {
  //   console.log(123)
  //   return this.http.post<Level>(this.apiUrl, level);
  // }

}
