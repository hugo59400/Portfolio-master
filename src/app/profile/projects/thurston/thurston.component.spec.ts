import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThurstonComponent } from './thurston.component';

describe('ThurstonComponent', () => {
  let component: ThurstonComponent;
  let fixture: ComponentFixture<ThurstonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThurstonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThurstonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
