import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcq4Component } from './mcq-4.component';

describe('Mcq4Component', () => {
  let component: Mcq4Component;
  let fixture: ComponentFixture<Mcq4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mcq4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mcq4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
