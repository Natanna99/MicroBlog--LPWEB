import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-de-publicacao',
  templateUrl: './lista-de-publicacao.component.html',
  styleUrls: ['./lista-de-publicacao.component.css']
})
export class ListaDePublicacaoComponent implements OnInit {

  @Input()
  posts = null;

  @Input()
  editando = null;

  @Output()
  onEditar = new EventEmitter<any>();

  @Output()
  onExcluir = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  editar(publicacao) {
    this.onEditar.emit(publicacao);

  }

  excluir(publicacao) {
    this.onExcluir.emit(publicacao);
  }

}

