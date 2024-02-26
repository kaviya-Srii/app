import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses4Component } from './courses-4.component';

describe('Courses4Component', () => {
  let component: Courses4Component;
  let fixture: ComponentFixture<Courses4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courses4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Courses4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
