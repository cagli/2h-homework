import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { DialogNewTicketComponent } from './dialog-new-ticket.component';

describe('DialogNewTicketComponent', () => {
  let component: DialogNewTicketComponent;
  let fixture: ComponentFixture<DialogNewTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogNewTicketComponent],
      providers:  [{ provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
