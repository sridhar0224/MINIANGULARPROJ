import { Component, OnInit } from '@angular/core';
import { MiniservicesService } from '../miniservices.service';
import { GenreservicesService } from '../genreservices.service';
import { Songss } from '../song';
import { GenreNames } from '../Genre';
import { ConfirmationdialogComponent } from '../confirmationdialog/confirmationdialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-song-registration',
  templateUrl: './song-registration.component.html',
  styleUrls: ['./song-registration.component.scss']
})
export class SongRegistrationComponent implements OnInit {


  GenreNamess: GenreNames[];
  newsong: string;
  Duration: string;
  Genre: any;
  myString:string;
  myArray:any;
  checkedgenre: number[];
   str:string;

  constructor(private MiniservicesService: MiniservicesService,public GenreservicesService:GenreservicesService,private dialog: MatDialog) {

    debugger;
    this.newsong = null;
    this.Duration = null;
    this.Genre = null;
    this.checkedgenre=[];
    
   }

  ngOnInit(): void {
    debugger;
    this.GenreservicesService.fetchgenre();
  }
  onSave() {
    debugger;
      const dialogRef = this.dialog.open(ConfirmationdialogComponent,{
        data:{
          message: 'Are you sure want to Save?',
          buttonText: {
            ok: 'Save',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          debugger;
          const { checkedgenre } = this;
          this.GenreservicesService.GenreNamess.forEach(GenreNames => {
            if (checkedgenre.includes(GenreNames.id)) {
              this.Genre=GenreNames.title;
              this.Genre = this.Genre.replace("|", ","); 
            }
          });
          this.str = this.Genre.toString(); 
          //======================================================
          const { newsong, Duration,str} = this; 
          this.MiniservicesService.addsong(newsong,Duration,str)
            .subscribe((Songss: Songss) => {
              if (Songss.title,Songss.Duration,Songss.Genre) {
                this.newsong = null; 
                this.Duration = null; 
                this.Genre = null; 
              }
            }); 
        }
      });
    }
}
