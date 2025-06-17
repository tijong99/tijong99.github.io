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
  stylesList = ['red', 'orange', 'yellow', 'blue', 'violet'];
  styleIndex = 0;
  hoverTextList: HoverText[] = [
    {
      index: 0,
      list: ['Seeking', 'Traversing', 'Exploring', 'Revealing'],
      style: this.stylesList[this.randomColor()],
    },

    {
      index: 0,
      list: [' the '],
      style: 'text2',
    },
    {
      index: 0,
      list: ['creative', 'generative', 'transformative'],
      style: this.stylesList[this.randomColor()],
    },
    {
      index: 0,
      list: ['potential in the complexities of the '],
      style: 'text2',
    },
    {
      index: 0,
      list: ['natural', 'physical'],
      style: this.stylesList[this.randomColor()],
    },
    {
      index: 0,
      list: ['world. Using  '],
      style: 'text2',
    },
    {
      index: 0,
      list: ['artistic', 'tinkering', 'open-ended making', 'enacting'],
      style: this.stylesList[this.randomColor()],
    },
    {
      index: 0,
      list: [' strategies.  To '],
      style: 'text2',
    },

    {
      index: 0,
      list: ['imagine', 'dream', 'verbalize', 'demonstrate', 'research'],
      style: this.stylesList[this.randomColor()],
    },
    {
      index: 0,
      list: [' new ways of  '],
      style: 'text2',
    },
    {
      index: 0,
      list: ['being with', 'relating to'],
      style: this.stylesList[this.randomColor()],
    },
    {
      index: 0,
      list: [' sociotechnical  '],
      style: 'text2',
    },
    {
      index: 0,
      list: ['systems', 'technologies', 'practices'],
      style: this.stylesList[this.randomColor()],
    },
    {
      index: 0,
      list: [' that shape it.  '],
      style: 'text2',
    },
  ];

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
