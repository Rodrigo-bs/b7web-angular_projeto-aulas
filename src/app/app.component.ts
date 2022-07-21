import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-aulas';
  nomes = ['Rodrigo', 'Alisson', 'Pedro', 'Ronaldo'];
  meuNome = this.nomes[0];

  linguagens = ['html', 'css', 'js', 'php'];

  pessoas = [
    {nome: 'Rodrigo', idade: 19},
    {nome: 'Alisson', idade: 20},
    {nome: 'Pedro', idade: 22},
    {nome: 'Ronaldo', idade: 31}
  ];
  
  soma() {
    return 'Essa é a função soma.';
  }
}
