import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbreviacaoCardComponent } from './abreviacao-card.component';

describe('AbreviacaoCardComponent', () => {
  let component: AbreviacaoCardComponent;
  let fixture: ComponentFixture<AbreviacaoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbreviacaoCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbreviacaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
