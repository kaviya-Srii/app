import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcq5Component } from './mcq-5.component';

describe('Mcq5Component', () => {
  let component: Mcq5Component;
  let fixture: ComponentFixture<Mcq5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mcq5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mcq5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
