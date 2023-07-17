import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string;
  buttonText: string = 'Acessar'.toUpperCase();
  buttonTexts: string[] = ['Vender', 'Comprar'];
  buttonNumber: number = 1;
  buttonObject = {
    label: 'Adicionar ao Carrinho',
  };

  getAlert(param: number) {
    alert(`Você clicou no botão: ${this.label} e o número é ${param}`);
  }
}
