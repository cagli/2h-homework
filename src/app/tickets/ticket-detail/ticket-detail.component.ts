import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../../interfaces/ticket.interface';
import { BackendService } from '../../backend.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  public ticket: Ticket;
  // provide icon name if task is completed or not
  public status: string;
  public readonly users$ = this.backendService.users();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private backendService: BackendService,
    private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.backendService.ticket(params['id']).subscribe(ticket => {
        this.ticket = ticket;
        this.status = this.ticket.completed ? 'check_circle_outline' : 'pending';
      })
    });
  }

  assignTo(userId) {
    this.backendService.assign(this.ticket.id, userId).subscribe(ticket => this.openSnackBar(
      'ticket successfully assigned'));
  }

  save() {
    this.backendService.complete(this.ticket.id, true).subscribe(() => { this.router.navigate(['/'])
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
