import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbreviacaoComponent } from './abreviacao.component';

describe('AbreviacaoComponent', () => {
  let component: AbreviacaoComponent;
  let fixture: ComponentFixture<AbreviacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbreviacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbreviacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
