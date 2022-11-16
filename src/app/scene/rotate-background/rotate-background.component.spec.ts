import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateBackgroundComponent } from './rotate-background.component';

describe('RotateBackgroundComponent', () => {
  let component: RotateBackgroundComponent;
  let fixture: ComponentFixture<RotateBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotateBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
