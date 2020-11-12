import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacao } from './app.models';
import { Observable } from 'rxjs';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  constructor(private http: HttpClient) {}

  listaP() {
    return this.http.get('https://lpweb-microblog.herokuapp.com/api/textos/');
  }

  salvar(id: number, descricao: string, curtida: boolean) {
    if (id) {
      return this.http.patch('https:lpweb-microblog.herokuapp.com/api/textos/' + id + '/', { descricao: descricao });
    }
    else {
      return this.http.post('https:lpweb-microblog.herokuapp.com/api/textos/', { descricao: descricao })
    }
  }

  excluir(publicacao: number | Publicacao) {
    let post = null;
    if (typeof (publicacao) == 'number') {
      post = publicacao;
    }
    else {
      post = publicacao.id;
    }
    return this.http.delete('https:lpweb-microblog.herokuapp.com/api/textos/' + post + '/');
  }

}
