import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Songss } from './song';



@Injectable({
  providedIn: 'root'
})
export class MiniservicesService {

  url: string;
  urlgenre: string;
  //GenreNamess: GenreNames[];
  Songs: Songss[];

  httpOptions: object;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.Songs = [];
    this.url = 'http://localhost:3000/Song';
    this.urlgenre = 'http://localhost:3000/Genre';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }

  fetchsong() {
    debugger;
    this.http.get<Songss[]>(`${this.url}`)
      .pipe(
        catchError((err: any): Observable<Songss[]> => {  
          this.snackBar.open('Error in Fetching the Songs', '', {
            duration: 5000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
          });      
          return of([]); // fallback value
        })
      )
      .subscribe((Songs: Songss[]) => {
        this.Songs = Songs;
      });
  }


  addsong(nwsong: string,Duration:string,Genre:string): Observable<Songss> {
    debugger;
    const Songsss: Songss = new Songss(nwsong, Duration,Genre);
    return this.http.post<Songss>(this.url, {
      title: Songsss.title,
      Duration: Songsss.Duration,
      Genre: Songsss.Genre,
    }, this.httpOptions)
      .pipe(
        tap((Song: Songss) => {
          this.Songs.push(Song);
          this.snackBar.open('Song Saved Successfully', '', {
            duration: 7000, panelClass: ['mat-toolbar', 'mat-accent'],verticalPosition: 'top' ,horizontalPosition:'right'
          });
        }),
        catchError((err: any): Observable<any> => {
          this.snackBar.open('Error in inserting data', '', {
            duration: 7000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
          });
          return of({}); // fallback value
        }),
      );
  }

     
  deletesong(id:number) {
    debugger;
    //const selectedsongs = this.Songs.filter(Songss => Songss.id);
    const selectedsongs = this.Songs.filter(Songss=>Songss.id ===id);
    const deletesongg = selectedsongs.map(selectedsongs => this.http.delete<Songss>(`${this.url}/${selectedsongs.id}`));
   forkJoin(deletesongg).subscribe((results) => {
    this.Songs.filter(Songss=>Songss.id !=id)
    this.snackBar.open('Song Deleted Successfully', '', {
      duration: 7000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
    });
    });
    this.fetchsong();
  }
}
