import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaEdicao } from './comida-edicao';

describe('ComidaEdicao', () => {
  let component: ComidaEdicao;
  let fixture: ComponentFixture<ComidaEdicao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComidaEdicao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaEdicao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
