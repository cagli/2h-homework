import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Ticket } from '../../../interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;
  public readonly users$ = this.backendService.users();
  public status: string;
  public isLoading = false;
  public user: User;


  constructor(private backendService : BackendService) { }

  ngOnInit(): void {
    this.checkStatus();
    if (this.ticket.assigneeId) {
      this.isLoading = true;
      this.backendService.user(this.ticket.assigneeId).subscribe(user => {
        this.user = user;
        this.isLoading = false;
      });
    }
  }

  // change status of the ticket
  complete(checked: boolean): void {
    this.isLoading = true;
    this.backendService.complete(this.ticket.id, checked).subscribe(ticket =>{
      this.ticket = ticket;
      this.checkStatus();
      this.isLoading = false;
    });

  }

  checkStatus(): void {
    this.status = this.ticket.completed ? 'completed' : 'pending';
  }

  assignTo(userId) {
    this.backendService.assign(this.ticket.id, userId).subscribe(ticket =>
      this.ticket = ticket);
  }
}
