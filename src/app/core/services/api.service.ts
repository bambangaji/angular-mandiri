import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com'; 
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/endpoint`).pipe(
      map((response: HttpResponse<any>) => {
        // Extract the data from the response
        return response.body;
      })
    );
  }
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/endpoint`, data).pipe(
      map((response: HttpResponse<any>) => {
        // Extract the data from the response
        return response.body;
      })
    );
  }
}
