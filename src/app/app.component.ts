import { Component } from '@angular/core';
import { Publicacao } from './app.models';
import { PublicacaoService } from './publicacao.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  editando = {id:0, descricao: '', curtida: false};
  descricao = null;
  curtida: false;
  posts: any = [];

  constructor(private publicacaoService: PublicacaoService){
    this.atualizarListaP();
  }  
  
  atualizarListaP(){
    this.publicacaoService.listaP().subscribe(dados=> { this.posts = dados;});
  }

  salvar() {
    this.editando.descricao = this.descricao;
    this.editando.curtida = this.curtida;
    this.publicacaoService.salvar(this.editando.id, this.editando.descricao, this.editando.curtida).subscribe(
      (dados) => {
        this.atualizarListaP();
      },
      error => console.log(error));

    this.descricao = null;
    this.editando = { id: 0, descricao: '', curtida: false};
  }


  editar(publicacao){
    this.editando= publicacao;
    this.descricao= publicacao.descricao
  }

  excluir(disciplina) {
    if (this.editando == disciplina) {
      alert('não é possivel excluir disciplina em edição');
    } else {
      if (confirm('Tem certeza que deseja excluir a publicação?')) {
        this.publicacaoService.excluir(disciplina).subscribe(
          dados => this.atualizarListaP(),
          erro=> console.log(erro));
      }
    }
  }
}
