import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/model/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() sliderConfig;
  @Input() movies: Movies;
  @Input() title: string;


  constructor() {

   }

  ngOnInit(): void {
  }

}
