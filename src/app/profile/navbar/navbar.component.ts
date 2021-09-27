import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {}

  public onClick(elementId: string): void {
    this.router.navigateByUrl('').then(r => {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(elementId);
      }, 400);
    });
  }

}
