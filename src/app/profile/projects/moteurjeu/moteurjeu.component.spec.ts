import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteurjeuComponent } from './moteurjeu.component';

describe('MoteurjeuComponent', () => {
  let component: MoteurjeuComponent;
  let fixture: ComponentFixture<MoteurjeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoteurjeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoteurjeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
