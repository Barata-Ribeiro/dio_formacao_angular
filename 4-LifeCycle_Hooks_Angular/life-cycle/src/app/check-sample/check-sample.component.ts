import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantity: number = 0;

  constructor() {}

  addQuantity() {
    this.quantity++;
  }

  removeQuantity() {
    this.quantity--;
  }

  // checked > content > view

  ngOnInit(): void {
    console.log('I am the: ngOnInit of CheckSampleComponent');
  }
  ngDoCheck(): void {
    console.log('I am the: ngDoCheck of CheckSampleComponent');
  }

  // When the first content is initialized
  ngAfterContentInit(): void {
    console.log('I am the: ngAfterContentInit of CheckSampleComponent');
  }

  // After the view is initialized
  ngAfterViewInit(): void {
    console.log('I am the: ngAfterViewInit of CheckSampleComponent');
  }

  // After some content has been changed, verify the content
  ngAfterContentChecked(): void {
    console.log('I am the: ngAfterContentChecked of CheckSampleComponent');
  }

  // After some content has been changed, verify the view
  ngAfterViewChecked(): void {
    console.log('I am the: ngAfterViewChecked of CheckSampleComponent');
  }

  ngOnDestroy(): void {
    console.log('Good Bye my friend...');
  }
}
