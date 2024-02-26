import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcq1Component } from './mcq-1.component';

describe('Mcq1Component', () => {
  let component: Mcq1Component;
  let fixture: ComponentFixture<Mcq1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mcq1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mcq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
