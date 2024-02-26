import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcq3Component } from './mcq-3.component';

describe('Mcq3Component', () => {
  let component: Mcq3Component;
  let fixture: ComponentFixture<Mcq3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mcq3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mcq3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
