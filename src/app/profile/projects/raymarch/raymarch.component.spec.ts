import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaymarchComponent } from './raymarch.component';

describe('RaymarchComponent', () => {
  let component: RaymarchComponent;
  let fixture: ComponentFixture<RaymarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaymarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaymarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
