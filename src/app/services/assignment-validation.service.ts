import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssignmentValidationDtoReq } from '../classes/assignmentvalidationDtoReq';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentValidationService {
  private apiUrl = 'http://localhost:9000/api/Answer'

  constructor(private http: HttpClient) { }
  addanswer(ans:AssignmentValidationDtoReq): Observable<AssignmentValidationDtoReq> {
    
    return this.http.post<AssignmentValidationDtoReq>(this.apiUrl, ans);
  }
}
