import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaForm } from './comida-form';

describe('ComidaForm', () => {
  let component: ComidaForm;
  let fixture: ComponentFixture<ComidaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComidaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
