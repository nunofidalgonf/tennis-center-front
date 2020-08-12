import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentCardComponent } from './urgent-card.component';

describe('UrgentCardComponent', () => {
  let component: UrgentCardComponent;
  let fixture: ComponentFixture<UrgentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
