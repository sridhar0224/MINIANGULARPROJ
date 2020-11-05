import { Component, OnInit } from '@angular/core';
import {Songss} from '../song';
import { MiniservicesService } from '../miniservices.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DialogsserviceService } from '../dialogsservice.service';
import { ConfirmationdialogComponent } from '../confirmationdialog/confirmationdialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {
  displayedColumns: string[] = ['title'];
  dataSource = this.MiniservicesService.fetchsong();

 
  newsong: string;
  Duration: string;
  Genre: any;
  result: any;
  ans:string;
 
  constructor(public MiniservicesService: MiniservicesService,private DialogsserviceService: DialogsserviceService,private dialog: MatDialog) { }

  ngOnInit(): void {
    debugger;
    debugger;
    this.MiniservicesService.fetchsong();
  }

ondelete(id:number) {
  debugger;
    const dialogRef = this.dialog.open(ConfirmationdialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
       this.MiniservicesService.deletesong(id);
       this.MiniservicesService.fetchsong();
      }
    });
  }

  //ondelete(id:number) {

    //https://stackblitz.com/edit/angular-confirmation-dialog?file=app%2Fconfirmation-dialog%2Fconfirmation-dialog.component.css
    //this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
   // .then((confirmed) => this.MiniservicesService.deletesong(id))
    //.catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
   //debugger;
  // this.MiniservicesService.deletesong(id);
  // this.MiniservicesService.fetchsong();
 // }

}
