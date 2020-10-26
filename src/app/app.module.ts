import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './layout/header/header.component';

/* Routing */
import { AppRoutingModule } from './app-routing.module';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TicketComponent } from './tickets/ticket/ticket.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DialogNewTicketComponent } from './dialog-new-ticket/dialog-new-ticket.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketComponent,
    TicketDetailComponent,
    TicketsComponent,
    DialogNewTicketComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      AngularMaterialModule,
      ReactiveFormsModule,
      FormsModule
  ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
