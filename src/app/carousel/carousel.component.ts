import { Component, Input, OnInit } from '@angular/core';

interface carouselImages{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  @Input() images: carouselImages[] = []

  selectesIndex = 0

  ngOnInit(): void {
    
  }
}
