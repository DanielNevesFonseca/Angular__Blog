import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.responsive.component.scss'],
})
export class HomeComponent implements OnInit {
  postList = [...dataFake]
  postListSmallCard = [...dataFake]

  constructor() {}

  ngOnInit(): void {
    this.smallCardList()
  }

  smallCardList(){
    this.postListSmallCard.splice(0, 1)
    return this.postListSmallCard
  }
}
