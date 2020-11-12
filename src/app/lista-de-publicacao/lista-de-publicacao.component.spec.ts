import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePublicacaoComponent } from './lista-de-publicacao.component';

describe('ListaDePublicacaoComponent', () => {
  let component: ListaDePublicacaoComponent;
  let fixture: ComponentFixture<ListaDePublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePublicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
