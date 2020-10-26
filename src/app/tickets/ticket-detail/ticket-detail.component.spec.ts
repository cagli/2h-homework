import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailComponent } from './ticket-detail.component';

import { ActivatedRoute, Router } from '@angular/router';
// import { BackendService } from '../../backend.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

describe('TicketDetailComponent', () => {
  let component: TicketDetailComponent;
  let fixture: ComponentFixture<TicketDetailComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketDetailComponent],
      providers: [{provide: ActivatedRoute, useValue: {
        params: of([{id: 1}]),
      }}, Router, MatSnackBar]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
