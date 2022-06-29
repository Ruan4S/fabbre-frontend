import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbreviaturaComponent } from './abreviatura.component';

describe('AbreviaturaComponent', () => {
  let component: AbreviaturaComponent;
  let fixture: ComponentFixture<AbreviaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbreviaturaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbreviaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
