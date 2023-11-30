import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projecte1Component } from './projecte1.component';

describe('Projecte1Component', () => {
  let component: Projecte1Component;
  let fixture: ComponentFixture<Projecte1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projecte1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Projecte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
