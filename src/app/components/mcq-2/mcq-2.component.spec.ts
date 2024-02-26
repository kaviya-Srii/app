import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcq2Component } from './mcq-2.component';

describe('Mcq2Component', () => {
  let component: Mcq2Component;
  let fixture: ComponentFixture<Mcq2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mcq2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mcq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
