import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Level} from "../classes/level";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private apiUrl ='http://localhost:9000/level'

  constructor(private http:HttpClient) { }
  getLeveles():Observable<Level[]>
  {
    return this.http.get<Level[]>(this.apiUrl);
  }
  deleteTask(level:Level):Observable<Level>{
    const url :string =`${this.apiUrl}/${level.id}`;
    return this.http.delete<Level>(url);
  }
  addLevel(level: Level): Observable<Level> {
    console.log(123)
    return this.http.post<Level>(this.apiUrl, level);
  }
}
