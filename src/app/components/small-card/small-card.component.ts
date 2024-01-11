import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.scss',
    './small-card.responsive.component.scss',
  ],
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string = '';

  @Input()
  cardTitle: string = '';

  @Input()
  postId: string = '';

  constructor() {}

  ngOnInit(): void {}
}
