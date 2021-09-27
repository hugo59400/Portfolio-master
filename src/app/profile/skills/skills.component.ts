import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // Progress bar
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  public values: number[];

  private observer: IntersectionObserver;

  constructor() {
    // Values of the progress bars
    this.values = [85, 85, 75, 70, 60, 55, 45, 35];
    // Definition of the observer
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
    const items = document.querySelectorAll('.bar-skills');
    items.forEach(item => {
      item.classList.add('not-visible');
      this.observer.observe(item);
    });

    const names = document.querySelectorAll('.name-skill');
    names.forEach(item => {
      item.classList.add('not-visible');
      this.observer.observe(item);
    });

    const skills = document.querySelectorAll('.icon-skills');
    skills.forEach(item => {
      item.classList.add('not-visible');
      this.observer.observe(item);
    });
  }

}

