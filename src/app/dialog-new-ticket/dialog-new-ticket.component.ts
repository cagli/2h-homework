import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import { BackendService } from '../backend.service';

import { Ticket } from '../../interfaces/ticket.interface';

@Component({
  selector: 'app-dialog-new-ticket',
  templateUrl: './dialog-new-ticket.component.html',
  styleUrls: ['./dialog-new-ticket.component.css']
})
export class DialogNewTicketComponent {

  public ticket: Ticket;

  ticketFormControl = new FormControl('', [
    Validators.required
  ]);


  constructor(
    public dialogRef: MatDialogRef<DialogNewTicketComponent>,
    private backEndService: BackendService ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    if (this.ticketFormControl.valid) {
      this.backEndService.newTicket({ description: this.ticketFormControl.value }).subscribe(
        (res) => {
          this.dialogRef.close();
        }
      )
    }
  }
}
