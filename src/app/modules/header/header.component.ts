import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }
  @Input() count: any;
  navigate(url: any) {
    this.router.navigate([url]);
  }
  ngOnInit(): void {
  }

}
