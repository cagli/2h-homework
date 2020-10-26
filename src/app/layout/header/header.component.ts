import { Component } from '@angular/core';
import { DialogNewTicketComponent } from '../../dialog-new-ticket/dialog-new-ticket.component';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(public dialog: MatDialog) { }


  createTicket(): void {
    this.dialog.open(DialogNewTicketComponent, {
      width: '450px'
    });
  }
}
