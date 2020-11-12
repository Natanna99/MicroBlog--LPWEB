import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListaDePublicacaoComponent } from './lista-de-publicacao/lista-de-publicacao.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicacaoService } from './publicacao.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaDePublicacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PublicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
