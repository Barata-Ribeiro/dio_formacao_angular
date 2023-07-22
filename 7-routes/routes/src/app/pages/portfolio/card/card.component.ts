import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private routeParams: ActivatedRoute, private navigation: Router) {
    //http://localhost:4200/portfolio/{1}
    this.routeParams.params.subscribe((res) => console.log(res));
    this.routeParams.firstChild?.params.subscribe((res) => console.log(res));


    //http://localhost:4200/portfolio/1{?name=jason&token=324234987}
    this.routeParams.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navigation.navigate(['/']);
    // }, 1000);
  }
}
