import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  products: string[] = [];
  menuType: string = '';

  constructor() {
    this.products = ['mice', 'keyboard', 'laptop', 'mousepad'];
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  addStuff() {
    this.products.push('GPU');
  }

  remove(index: number) {
    this.products.splice(index, 1);
  }
}
