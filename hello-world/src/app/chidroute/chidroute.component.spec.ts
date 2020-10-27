import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidrouteComponent } from './chidroute.component';

describe('ChidrouteComponent', () => {
  let component: ChidrouteComponent;
  let fixture: ComponentFixture<ChidrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChidrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChidrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
