import { ComponentFixture, TestBed } from '@angular/core/testing';

import { llistaCorreusComponent } from './llista-correus.component';

describe('LlistaCorreusComponent', () => {
  let component: llistaCorreusComponent;
  let fixture: ComponentFixture<llistaCorreusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [llistaCorreusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(llistaCorreusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
