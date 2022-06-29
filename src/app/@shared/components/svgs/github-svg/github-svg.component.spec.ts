import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSvgComponent } from './github-svg.component';

describe('GithubSvgComponent', () => {
  let component: GithubSvgComponent;
  let fixture: ComponentFixture<GithubSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
