import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(observables => {
      observables.forEach(observ => {
        if (observ.intersectionRatio > 0) {
          observ.target.classList.remove('not-visible');
        }
        else{
          observ.target.classList.add('not-visible');
        }
      });
    });
  }

  ngOnInit(): void {
    const items = document.querySelectorAll('.round-animate');
    items.forEach(item => {
      item.classList.add('not-visible');
      this.observer.observe(item);
    });
  }

}
