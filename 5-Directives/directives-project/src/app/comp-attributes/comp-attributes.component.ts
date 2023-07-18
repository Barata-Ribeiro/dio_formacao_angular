import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-attributes',
  templateUrl: './comp-attributes.component.html',
  styleUrls: ['./comp-attributes.component.css'],
})
export class CompAttributesComponent {
  styles: string = 'disable';
  backgroundColor: string = 'red';
  fontColor: string = 'white';
  item: string = '';
  stuffList: string[] = [];
  isEnableBlock: boolean = true;

  changeStyles() {
    if (this.styles === 'disable') this.styles = 'enable';
    else this.styles = 'disable';
  }

  addStuffToList() {
    this.stuffList.push(this.item);
  }
}
