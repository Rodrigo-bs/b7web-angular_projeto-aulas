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
  
  soma() {
    return 'Essa é a função soma.';
  }
}
