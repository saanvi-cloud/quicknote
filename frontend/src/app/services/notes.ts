import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';


@Injectable({ providedIn: 'root' })
export class NotesService {

  // private apiUrl = 'http://localhost:3000/api/notes';
  // private apiUrl = 'https://quicknote-yzl7.onrender.com/api/notes';
  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {}

  getNotes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addNote(text: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { text });
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
