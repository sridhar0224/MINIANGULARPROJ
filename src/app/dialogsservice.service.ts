import { Injectable,ɵisObservable } from '@angular/core';
import {  Observable} from 'rxjs';
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogsserviceService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {

      let dialogRef: MatDialogRef<ConfirmationdialogComponent>;

      dialogRef = this.dialog.open(ConfirmationdialogComponent );

      //dialogRef.componentInstance.title = title;
      //dialogRef.componentInstance.message = message;

      return dialogRef.afterClosed();
  }
}
