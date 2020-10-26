import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackendService } from '../../backend.service';

import { TicketComponent } from './ticket.component';

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketComponent],
      providers: [ BackendService]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
