import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses5Component } from './courses-5.component';

describe('Courses5Component', () => {
  let component: Courses5Component;
  let fixture: ComponentFixture<Courses5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courses5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Courses5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
