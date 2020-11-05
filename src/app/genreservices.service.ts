import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenreNames } from './Genre';
@Injectable({
  providedIn: 'root'
})
export class GenreservicesService {
  GenreNamess: GenreNames[];
  urlgenre: string;
  httpOptions: object;
  constructor(public http: HttpClient, public snackBar: MatSnackBar) { 

    this.GenreNamess = [];
    this.urlgenre = 'http://localhost:3000/Genre';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }
  fetchgenre() {
    debugger;
    this.http.get<GenreNames[]>(`${this.urlgenre}`)
      .pipe(
        catchError((err: any): Observable<GenreNames[]> => {  
          this.snackBar.open('Error in Fetching the Songs', '', {
            duration: 50000,
          });      
          return of([]); // fallback value
        })
      )
      .subscribe((GenreNamess: GenreNames[]) => {
        this.GenreNamess = GenreNamess;
      });
  }
}
