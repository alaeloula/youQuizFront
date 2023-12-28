import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { validation } from '../classes/validation';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private apiUrl = 'http://localhost:9000/api/Validation';

  constructor(private http: HttpClient) { }

  getValidation(): Observable<validation[]> {
    return this.http.get<validation[]>(this.apiUrl);
  }
  getValidationByQst(id:number): Observable<validation[]> {
    return this.http.get<validation[]>(this.apiUrl+'/byQuestion/'+id);
  }

  addValidation(validation: validation): Observable<validation>
  {
    return this.http.post<validation>(this.apiUrl, validation);
  }
  deleteValidation(validation:validation):Observable<validation>{
    const url :string =`${this.apiUrl}/${validation.id}`;
    return this.http.delete<validation>(url);
  }

}
