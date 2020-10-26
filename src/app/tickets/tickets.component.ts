import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BackendService } from '../backend.service';
import { Ticket } from '../../interfaces/ticket.interface';



@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();
  public tickets: Ticket[];

  constructor(private readonly backendService: BackendService) { }

  ngOnInit(): void {

    this.backendService.tickets().subscribe(tickets=> this.tickets= tickets)

  }

  ngOnDestroy(): void {



  }

}
