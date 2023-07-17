import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  // name: string = 'Barata';
  @Input()
  name: string = '';

  constructor() {
    console.log(`I am the: Constructor ${this.name}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`I am the: OnChanges ${this.name}`);
  }

  ngOnInit(): void {
    console.log(`I am the: OnInit ${this.name}`);
    // this.name = `Olá, ${this.name}!`;
  }
}
