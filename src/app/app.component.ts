import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario';
  
  nome: string = ''
  idade: string =''
  telefone: string = ''
  email: string = ''
  endereco: string = ''
  numeroResidencial: string = ''
  bairro: string = ''
  cidade: string = ''

  exibirTela: boolean = false
  newBtn: boolean = false

 
  cardVisita() {
    if (this.nome === "") {
      alert("Preencha o campo Nome!");
    } else if (this.idade === "") {
      alert("Preencha o campo Idade!");
    } else if (this.telefone === "") {
      alert("Preencha o campo Telefone!");
    } else if (this.email === "") {
      alert("Preencha o campo Email!");
    } else if (this.endereco === "") {
      alert("Preencha o campo Endereço!");
    } else if (this.numeroResidencial === "") {
      alert("Preencha o campo Número Residencial!");
    } else if (this.bairro === "") {
      alert("Preencha o campo Bairro!");
    } else if (this.cidade === "") {
      alert("Preencha o campo Cidade!");
    } else {
      this.exibirTela = true;
      this.newBtn = true;
    }
  }
  
  novoFormulario() {
    this.nome = '';
    this.idade = '';
    this.telefone = '';
    this.email = '';
    this.endereco = '';
    this.numeroResidencial = '';
    this.bairro = '';
    this.cidade = '';
    this.exibirTela = false;
    this.newBtn = false;
  }
}

