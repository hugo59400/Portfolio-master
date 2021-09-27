import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuvideoComponent } from './jeuvideo.component';

describe('JeuvideoComponent', () => {
  let component: JeuvideoComponent;
  let fixture: ComponentFixture<JeuvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
