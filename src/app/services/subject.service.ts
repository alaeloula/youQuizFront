import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Subject } from '../classes/subject';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiUrl ='http://localhost:9000/Subject'

  constructor(private http:HttpClient) { }
  getSubjects():Observable<Subject[]>
  {
    return this.http.get<Subject[]>(this.apiUrl);
  }
  deleteTask(subject:Subject):Observable<Subject>{
    const url :string =`${this.apiUrl}/${subject.id}`;
    return this.http.delete<Subject>(url);
  }
  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.apiUrl, subject);
  }
 
}
