import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pages1Component } from './pages1.component';

describe('Pages1Component', () => {
  let component: Pages1Component;
  let fixture: ComponentFixture<Pages1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Pages1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pages1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
