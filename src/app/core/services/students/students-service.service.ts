import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../interfaces/students/student';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Student[]>{
    return this.httpClient.get<Student[]>('http://localhost:3000/students');
  }

  getById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`);
  }

  create(payload:Student){
    return this.httpClient.post<Student[]>('http://localhost:3000/students', payload);
  }

  update(payload: Student): Observable<Student> {
    return this.httpClient.put<Student>(`http://localhost:3000/students/${payload.id}`,payload);
   }

   delete(id: number) {
    return this.httpClient.delete(`http://localhost:3000/students/${id}`);
   }

}
