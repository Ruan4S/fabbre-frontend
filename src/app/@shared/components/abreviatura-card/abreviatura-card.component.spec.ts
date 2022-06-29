import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbreviaturaCardComponent } from './abreviatura-card.component';

describe('AbreviaturaCardComponent', () => {
  let component: AbreviaturaCardComponent;
  let fixture: ComponentFixture<AbreviaturaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbreviaturaCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbreviaturaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
