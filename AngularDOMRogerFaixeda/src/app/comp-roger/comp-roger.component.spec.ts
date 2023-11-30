import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRogerComponent } from './comp-roger.component';

describe('CompRogerComponent', () => {
  let component: CompRogerComponent;
  let fixture: ComponentFixture<CompRogerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompRogerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompRogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
