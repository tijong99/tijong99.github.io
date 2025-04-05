import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  hoverTextList: HoverText[] = [
    {
      index: 0,
      list: ['Seeking', 'Traversing', 'Exploring', 'Revealing'],
      style: 'red',
    },

    {
      index: 0,
      list: [' the '],
      style: '',
    },
    {
      index: 0,
      list: ['creative', 'generative', 'transformative'],
      style: 'red',
    },
    {
      index: 0,
      list: [' potential in the complexities of the '],
      style: '',
    },
    {
      index: 0,
      list: ['natural', 'physical'],
      style: 'red',
    },
    {
      index: 0,
      list: [' world. Using  '],
      style: '',
    },
    {
      index: 0,
      list: ['artistic', 'tinkering', 'open-ended making', 'enacting'],
      style: 'red',
    },
    {
      index: 0,
      list: [' strategies.  To '],
      style: '',
    },

    {
      index: 0,
      list: ['imagine', 'dream', 'verbalize', 'demonstrate', 'research'],
      style: 'red',
    },
    {
      index: 0,
      list: [' new ways of  '],
      style: '',
    },
    {
      index: 0,
      list: ['being with', 'relating to'],
      style: 'red',
    },
    {
      index: 0,
      list: [' sociotechnical  '],
      style: '',
    },
    {
      index: 0,
      list: ['systems', 'technologies', 'practices'],
      style: 'red',
    },
    {
      index: 0,
      list: [' that shape it.  '],
      style: '',
    },
  ];

  stylesList = ['red', 'orange', 'yellow', 'blue', 'violet'];
  styleIndex = 0;

  randomColor() {
    this.styleIndex = Math.floor(Math.random() * 5);
    return this.styleIndex;
  }

  rouletteOnHover(index: number) {
    let length = this.hoverTextList[index].list.length;
    if (length > 1) {
      this.hoverTextList[index].index =
        (this.hoverTextList[index].index + 1) % length;
      this.hoverTextList[index].style = this.stylesList[this.randomColor()];
    }
  }
}

export interface HoverText {
  list: string[];
  index: number;
  style: string;
}
