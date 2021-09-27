import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  public options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 1,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 300,
    realignOnResize: true,
    overflow: false,
  };

  public data: CloudData[] = [
    {text: 'Programmation', weight: 10, color: '#03293e'},
    {text: 'Réalité virtuelle', weight: 10, color: '#09679c'},
    {text: 'Rendu 3D', weight: 10, color: '#07527c'},
    {text: 'Jeux videos', weight: 9, color: '#0a7bbb'},
    {text: 'Sport', weight: 8, color: '#0c90da'},
    {text: 'Montage photo/audio/vidéo', weight: 7, color: '#0ea4f9'},
    {text: 'Visionnage séries/films', weight: 6, color: '#0ea4f9'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
